import { aiClient } from './ai_client/ai_client';
import { server } from './http_server/server';
import { httpClient } from './http_client/http_client';

const adapters = {
  aiClient,
  httpClient,
  server,
};

export { adapters };
