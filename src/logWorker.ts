import build from 'pino-abstract-transport';
import {fromEvent} from 'rxjs';
import {bufferTime, bufferCount} from 'rxjs/operators';
import {logproto} from './loki/logproto';
import {prepareProtoBatch} from './loki/helpers';
import axios from 'axios';
import {compress} from 'snappy';
import {LogWorkerOptions, PinoLogLine} from './logWorker.interface';

export const createTransport = (opts: LogWorkerOptions) => {
  try {
    const options = {
      lokiUrl: opts.lokiUrl || 'http://localhost',
      batchTimeout: opts.batchTimeout || 1000,
      maxBatchSize: opts.maxBatchSize || 250,
      lokiPort: opts.lokiPort || 3100,
      username: opts.username,
      password: opts.password,
      chronologicalOrder: opts.chronologicalOrder,
      labels: [...new Set([...opts.labels, 'hostname', 'app'])],
    };
    console.log('logWorker started!');
    return build(source => {
      try {
        const logObservable = fromEvent<PinoLogLine>(source, 'data');
        logObservable
          .pipe(bufferTime(options.batchTimeout, null, options.maxBatchSize))
          .subscribe(async batch => {
            if (batch.length > 0) {
              try {
                const preparedBatch = prepareProtoBatch(
                  batch,
                  options.labels,
                  options.chronologicalOrder
                );
                const err = logproto.PushRequest.verify(preparedBatch);
                if (err) {
                  throw new Error(err);
                }
                const message = logproto.PushRequest.create(preparedBatch);
                const buffer = logproto.PushRequest.encode(message).finish();
                const result = await compress(buffer);
                const response = await axios.post(
                  `${options.lokiUrl}:${options.lokiPort}/loki/api/v1/push`,
                  result,
                  {
                    headers: {
                      'Content-Type': 'application/x-protobuf',
                      'Content-Length': result.length + '',
                    },
                    auth:
                      options.username && options.password
                        ? {
                            username: options.username,
                            password: options.password,
                          }
                        : undefined,
                  }
                );
                if (response.status !== 204) {
                  throw new Error(
                    'Error during sending logs to Loki. Received status code: ' +
                      response.status +
                      ' data: ' +
                      JSON.stringify(response.data)
                  );
                }
              } catch (err) {
                for (const item of batch) {
                  console.log(item.time, item.level, ' LOG: ', item.msg);
                }
                console.error('error during log sent from LokiWorker', err);
              }
            }
          });
      } catch (err) {
        console.log('proto error', err);
      }
    });
  } catch (err) {
    console.log('createTransport error', err);
  }
};

module.exports = createTransport;

export {LogWorkerOptions};
