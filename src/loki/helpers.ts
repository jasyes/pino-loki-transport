import {PinoLogLine} from '../logWorker.interface';
import {logproto} from './logproto';

export const PinoLevelMap = {
  '10': 'trace',
  '20': 'debug',
  '30': 'info',
  '40': 'warn',
  '50': 'error',
  '60': 'fatal',
};

export const DEFAULT_PINO_KEYS = ['level', 'time', 'pid', 'msg'];

export const createProtoTimestamps = (logEntry: {
  msg: string;
  time: number;
}): logproto.IEntryAdapter => {
  return {
    timestamp: {
      seconds: Math.floor(logEntry.time / 1000),
      nanos: (logEntry.time % 1000) * 1000000,
    },
    line: logEntry.msg,
  };
};

const extractObjectKeys = (key: string, obj: object): string => {
  const keys = Object.keys(obj);
  if (keys.length === 0) {
    return key + '={}';
  }
  const result: string[] = [];
  for (const objKey of keys) {
    result.push(extractLabel(key + '_' + objKey, (obj as any)[objKey]));
  }
  return result.join(' ');
};

const extractLabel = (key: string, value: any): string => {
  if (Array.isArray(value)) {
    return `${key}=${value.join(',')}`;
  }
  if (typeof value === 'object') {
    return extractObjectKeys(key, value);
  }
  return `${key}=${value}`;
};

export const prepareProtoBatch = (
  batch: PinoLogLine[],
  importantLabels: string[],
  chronologicalOrder?: boolean
): logproto.IPushRequest => {
  if (batch.length === 0) {
    throw new Error('Empty batch');
  }
  const labelMaps = new Map<
    string,
    {
      msg: string;
      time: number;
    }[]
  >();
  for (const item of batch) {
    const labelArr = [];
    let msg =
      item.msg +
      ' ' +
      extractLabel('level', (PinoLevelMap as any)[item.level + ''] || 'error');
    // labelArr.push({
    //     key: 'level',
    //     value: (PinoLevelMap as any)[item.level + ''] || 'error'
    // });
    for (const key of Object.keys(item).sort()) {
      if (importantLabels.includes(key)) {
        labelArr.push({
          key,
          value: (item as any)[key] + '',
        });
      } else if (!DEFAULT_PINO_KEYS.includes(key)) {
        msg += ' ' + extractLabel(key, (item as any)[key]);
      }
    }
    const labels = `{${labelArr
      .map(item => item.key + '="' + item.value + '"')
      .join(',')}}`;
    const fromMap = labelMaps.get(labels);
    const logLine = {
      msg,
      time: item.time,
    };
    if (fromMap) {
      labelMaps.set(labels, [...fromMap, logLine]);
    } else {
      labelMaps.set(labels, [logLine]);
    }
  }
  return {
    streams: [...labelMaps.entries()].map(([labels, entries]) => {
      if (chronologicalOrder && entries.length > 1) {
        entries = entries.sort((prev, curr) => prev.time - curr.time);
      }
      return {
        labels,
        entries: entries.map(item => createProtoTimestamps(item)),
      };
    }),
  };
};
