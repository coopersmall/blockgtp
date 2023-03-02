const { Configuration, OpenAIApi } = require('openai');
const { newClientError, newServerError } = require('../../domain/errors');

class AIAdapter {
  constructor(token = process.env.OPEN_AI_TOKEN) {
    this.model = 'text-davinci-003';

    let config = Configuration({
      apiKey: token,
    });

    this.api = OpenAIApi(config);
  }

  async request(prompt) {
    try {
      let response = await this.api.createCompletion({
        model: this.model,
        prompt,
      });

      if (!response.data) {
        throw new Error('unable to send request to OpenAI');
      }

      return response.data;
    } catch (e) {
      if (e.response) {
        if (e.response.status < 500) {
          throw newClientError(e.message, e.response.status);
        }
        throw newServerError(e.message, e.response.status);
      }
      throw new Error(`request failed to send to OpenAI with the following error: ${e}`);
    }
  }
}

const newAIAdapter = (token) => {
  return new AIAdapter(token);
};

module.exports = { newAIAdapter };
