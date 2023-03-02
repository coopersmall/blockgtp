class ClientError extends Error {
  code;
  meta;

  constructor(message, code, meta) {
    super(message);
    this.code = code;
    this.meta = meta && meta;
  }

  isTransient() {
    if (this.code) {
      this.isTransient = true;
    }
  }

  print() {
    return `A client error occured with status code ${this.code} occured with the following message: ${this.message}`;
  }
}

export const newClientError = (message, code, meta = {}) => {
  return new ClientError(message, code, meta);
};
