"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransport = void 0;
const pino_abstract_transport_1 = __importDefault(require("pino-abstract-transport"));
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const logproto_1 = require("./loki/logproto");
const helpers_1 = require("./loki/helpers");
const axios_1 = __importDefault(require("axios"));
const snappy_1 = require("snappy");
const createTransport = (opts) => {
    try {
        const options = {
            lokiUrl: opts.lokiUrl || 'http://localhost',
            batchTimeout: opts.batchTimeout || 1000,
            maxBatchSize: opts.maxBatchSize || 250,
            lokiPort: opts.lokiPort || 3100,
            username: opts.username,
            password: opts.password,
            chronologicalOrder: opts.chronologicalOrder
        };
        console.log('logWorker started!');
        return pino_abstract_transport_1.default((source) => {
            try {
                const logObservable = rxjs_1.fromEvent(source, 'data');
                logObservable.pipe(operators_1.bufferTime(options.batchTimeout, null, options.maxBatchSize)).subscribe(async (batch) => {
                    if (batch.length > 0) {
                        const preparedBatch = helpers_1.prepareProtoBatch(batch, options.chronologicalOrder);
                        const err = logproto_1.logproto.PushRequest.verify(preparedBatch);
                        if (err) {
                            throw new Error(err);
                        }
                        const message = logproto_1.logproto.PushRequest.create(preparedBatch);
                        const buffer = logproto_1.logproto.PushRequest.encode(message).finish();
                        const result = await snappy_1.compress(buffer);
                        const response = await axios_1.default.post(`${options.lokiUrl}:${options.lokiPort}/loki/api/v1/push`, result, {
                            headers: {
                                'Content-Type': 'application/x-protobuf',
                                'Content-Length': result.length + ''
                            },
                            auth: options.username && options.password ? {
                                username: options.username,
                                password: options.password
                            } : undefined
                        });
                        if (response.status !== 204) {
                            for (const item of batch) {
                                console.log(item.time, ' LOG: ', item.msg);
                            }
                            console.error('Error during sending logs to Loki. Received status code: ', response.data, ' data: ', response.data);
                        }
                    }
                });
            }
            catch (err) {
                console.log('proto error', err);
            }
        });
    }
    catch (err) {
        console.log('createTransport error', err);
    }
};
exports.createTransport = createTransport;
module.exports = exports.createTransport;
//# sourceMappingURL=logWorker.js.map