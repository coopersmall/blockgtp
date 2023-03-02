const { Axios, AxiosError } = require('axios');
const { newClientError, newServerError } = require('../../domain/errors');

class HTTPAdapter {
  constructor() {
    this.adapter = new Axios();
  }

  async request(url, body, headers) {
    try {
      let response = await this.adapter.request({
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
      throw new Error('');
    }
  }
}

const newHTTPAdapter = () => {
  return new HTTPAdapter();
};

module.exports = { newHTTPAdapter };
