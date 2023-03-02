class ServerError extends Error {
  code;
  meta;

  constructor(message, code, meta) {
    super(message);
    this.code = code;
    this.meta = meta && meta;
  }

  print() {
    return `A server error occured with status code ${this.code} occured with the following message: ${this.message}`;
  }
}

const newServerError = (message, code, meta = {}) => {
  return new ServerError(message, code, meta);
};

module.exports = { newServerError }
