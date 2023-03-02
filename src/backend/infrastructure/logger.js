import { createLogger, format, transports } from 'winston';
const { combine, timestamp, prettyPrint } = format;

class Logger {
  constructor(service, meta) {
    this._logger = createLogger({
      format: combine(timestamp(), prettyPrint()),
      defaultMeta: { service, ...meta },
      transports: [new transports.Console()],
    });
  }

  info(message) {
    this._logger.info(message);
  }

  debug(message) {
    this._logger.debug(message);
  }

  warn(message) {
    this._logger.warn(message);
  }

  error(error) {
    this._logger.error(error);
  }
}

const init = (service, meta = {}) => {
  return new Logger(service, meta)
}

const logger = {
  init,
}

export { logger };
