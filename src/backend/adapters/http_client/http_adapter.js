import axios from 'axios';
import { newClientError, newServerError } from '../../domain/errors';

const DEFAULT_TIMEOUT_MS = 15000

const init = (timeout = DEFAULT_TIMEOUT_MS) => {
  const client = axios.create({
    timeout,
  })

  client.interceptors.response.use(
    function(response) {
      return response.data
    },
    function(error) {
      if (error.response) {
        const message = error.response.message
        const status = error.response.status

        if (status >= 400 && status < 500) return Promise.reject(newClientError(message, status))
        if (status > 500) return Promise.reject(newServerError(message, status))
      }
      return Promise.reject(error)
    }
  )

  return client
}

const httpAdapter = {
  init,
}

export default { httpAdapter };
