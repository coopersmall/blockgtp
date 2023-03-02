const winston = require("winston");

class Logger {
  _logger;

  constructor(service) {
    this._logger = new winston.createLogger({
      format: winston.format.json,
      defaultMeta: { service },
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

export const newLogger = (service) => {
  return new Logger(service);
};
