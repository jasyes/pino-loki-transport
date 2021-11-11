# Pino-Loki-Transport

A transport module for [Pino](https://github.com/pinojs/pino) to [Loki](https://github.com/grafana/loki) using GRPC (Protobuf).

## Installation

Use the NPM package manager to install Pino-Loki-Transport.

```bash
npm i --save pino-loki-transport
```

## Usage

```python
import pino from 'pino';
import { LogWorkerOptions } from 'pino-loki-transport';

const logger = pino({
  transport: {
    target: 'pino-loki-transport', 
    options: {
      lokiUrl: 'http://{{loki server ip address}}'
    } as LogWorkerOptions
  }
});
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)