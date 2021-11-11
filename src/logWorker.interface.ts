export interface LogWorkerOptions {
  lokiUrl: string;
  lokiPort?: number;
  maxBatchSize?: number;
  batchTimeout?: number;
  username?: string;
  password?: string;
  chronologicalOrder?: boolean;
  labels: string[];
}

export type PinoLogLine = {
  level: number;
  time: number;
  pid: number;
  hostname: string;
  msg: string;
};
