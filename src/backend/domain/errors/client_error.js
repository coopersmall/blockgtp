class ClientError extends Error {
  constructor(message, code, meta) {
    super(`A client error occured with status code ${code} occured with the following message: ${message}`);
    this.code = code;
    this.meta = meta && meta;
  }

  isTransient() {
    if (this.code) {
      this.isTransient = true;
    }
  }
}

const newClientError = (message, code, meta = {}) => {
  return new ClientError(message, code, meta);
};

export { newClientError };
