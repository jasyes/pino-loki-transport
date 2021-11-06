"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareProtoBatch = exports.createProtoTimestamps = exports.DEFAULT_PINO_KEYS = exports.PinoLevelMap = void 0;
exports.PinoLevelMap = {
    "10": "trace",
    "20": "debug",
    "30": "info",
    "40": "warn",
    "50": "error",
    "60": "fatal"
};
exports.DEFAULT_PINO_KEYS = ['level', 'time', 'pid', 'msg'];
const createProtoTimestamps = (logEntry) => {
    return {
        timestamp: {
            seconds: Math.floor(logEntry.time / 1000),
            nanos: (logEntry.time % 1000) * 1000000
        },
        line: logEntry.msg
    };
};
exports.createProtoTimestamps = createProtoTimestamps;
const prepareProtoBatch = (batch, chronologicalOrder) => {
    if (batch.length === 0) {
        throw new Error('Empty batch');
    }
    const labelMaps = new Map();
    for (const item of batch) {
        const labelArr = [];
        labelArr.push({
            key: 'level',
            value: exports.PinoLevelMap[item.level + ''] || 'error'
        });
        for (const key of Object.keys(item).sort()) {
            if (!exports.DEFAULT_PINO_KEYS.includes(key)) {
                labelArr.push({
                    key,
                    value: item[key] + ''
                });
            }
        }
        const labels = `{${labelArr.map(item => item.key + '="' + item.value + '"').join(',')}}`;
        const fromMap = labelMaps.get(labels);
        if (fromMap) {
            labelMaps.set(labels, [...fromMap, {
                    msg: item.msg,
                    time: item.time
                }]);
        }
        else {
            labelMaps.set(labels, [{
                    msg: item.msg,
                    time: item.time
                }]);
        }
    }
    return {
        streams: [...labelMaps.entries()].map(([labels, entries]) => {
            if (chronologicalOrder && entries.length > 1) {
                entries = entries.sort((prev, curr) => prev.time - curr.time);
            }
            return {
                labels,
                entries: entries.map(item => exports.createProtoTimestamps(item))
            };
        })
    };
};
exports.prepareProtoBatch = prepareProtoBatch;
//# sourceMappingURL=helpers.js.map