class ServerError extends Error {
  constructor(message, code, meta) {
    super(`A server error occured with status code ${code} occured with the following message: ${message}`);
    this.code = code;
    this.meta = meta && meta;
  }
}

const newServerError = (message, code, meta = {}) => {
  return new ServerError(message, code, meta);
};

export { newServerError };
