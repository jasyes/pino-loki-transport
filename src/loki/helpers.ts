import e from 'cors';
import { PinoLogLine } from '../logWorker.interface';
import { logproto } from './logproto';

export const PinoLevelMap = {
    "10": "trace",
    "20": "debug",
    "30": "info",
    "40": "warn",
    "50": "error",
    "60": "fatal"
}

export const DEFAULT_PINO_KEYS = ['level', 'time', 'pid', 'msg'];

export const createProtoTimestamps = (logEntry: {msg: string, time: number}): logproto.IEntryAdapter => {
    return {
        timestamp: {
            seconds: Math.floor(logEntry.time / 1000),
            nanos: (logEntry.time % 1000) * 1000000
        },
        line: logEntry.msg
    }
}

export const prepareProtoBatch = (batch: PinoLogLine[], chronologicalOrder?: boolean): logproto.IPushRequest => {
    if(batch.length === 0) {
        throw new Error('Empty batch');
    }
    const labelMaps = new Map<string, {
        msg: string,
        time: number
    }[]>();
    for (const item of batch) {
        const labelArr = [];
        labelArr.push({
            key: 'level',
            value: (PinoLevelMap as any)[item.level + ''] || 'error'
        });
        for (const key of Object.keys(item).sort()) {
            if (!DEFAULT_PINO_KEYS.includes(key)) {
                labelArr.push({
                    key,
                    value: (item as any)[key] + ''
                })
            }
        }
        const labels = `{${labelArr.map(item => item.key + '="' + item.value + '"').join(',')}}`;
        const fromMap = labelMaps.get(labels);
        if (fromMap) {
            labelMaps.set(labels, [...fromMap, {
                msg: item.msg,
                time: item.time
            }])
        } else {
            labelMaps.set(labels, [{
                msg: item.msg,
                time: item.time
            }])
        }
    }
    return {
        streams: [...labelMaps.entries()].map(([labels, entries]) => {
            if(chronologicalOrder && entries.length > 1) {
                entries = entries.sort((prev, curr) => prev.time - curr.time)
            }
            return {
                labels,
                entries: entries.map(item => createProtoTimestamps(item))
            }
        }) 
    }
}