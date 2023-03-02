import { Configuration, OpenAIApi } from 'openai';
import { newClientError, newServerError } from '../../domain/errors';

const DEFAULT_MODEL = 'text-davinci-003'

const init = (token = process.env.OPEN_AI_TOKEN) => {
  const config = Configuration({
    apiKey: token,
  })
  return OpenAIApi(config)
}

const request = async (prompt, model = DEFAULT_MODEL, adapter = init()) => {
  adapter.createCompletion({
    model,
    prompt,
  })
  .then(response => {
    return response.data
  })
  .catch(err => {
    if (err.response) {
      const message = err.message
      const status = err.response.status

      if (status >= 400 && status < 500) return Promise.reject(newClientError(message, status))
      if (status > 500) return Promise.reject(newServerError(message, status))
    }
    return Promise.reject(err)
  })
}

const aiAdapter = {
  init,
  request,
}

export { aiAdapter };
