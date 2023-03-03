import { Configuration, OpenAIApi } from 'openai';
import { newClientError, newServerError } from '../../domain/errors';

const DEFAULT_REQUEST_CONFIGS = {
  model: 'text-davinci-003',
  max_tokens: 1500,
  temperature: 0.3,
};

const defaultClient = OpenAIApi(
  Configuration({
    apiKey: process.env.OPEN_AI_TOKEN,
  })
);

const init = (token) => {
  const config = Configuration({
    apiKey: token,
  });
  return OpenAIApi(config);
};

const request = async (prompt, requestConfigs = DEFAULT_REQUEST_CONFIGS, client = defaultClient) => {
  client
    .createCompletion({
      prompt,
      ...requestConfigs,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      if (err.response) {
        const message = err.message;
        const status = err.response.status;

        if (status >= 400 && status < 500) return Promise.reject(newClientError(message, status));
        if (status > 500) return Promise.reject(newServerError(message, status));
      }
      return Promise.reject(err);
    });
};

const aiClient = {
  init,
  request,
};

export { aiClient };
