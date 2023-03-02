const { Axios, AxiosError } = require("axios");
const { newClientError, newServerError } = require("../../domain/errors");

class HTTPAdapter {
  adapter;

  constructor() {
    this.adapter = new Axios();
  }

  async request(url, body, headers) {
    try {
      response = await this.adapter.request({
        url,
        body,
        headers,
      });

      return response.data;
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.status < 500) {
          throw newClientError(e.message, e.status);
        }
        throw newServerError(e.message, e.status);
      }
      throw new Error("");
    }
  }
}

export const newHTTPAdapter = () => {
  return new HTTPAdapter();
};
