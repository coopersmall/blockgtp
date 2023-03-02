import { server } from './adapters/http_server/server';
import { configure } from './configure';
import { logger } from './infrastructure/logger';

const init = () => {
  const backendLogger = logger.init('backend');
  configure(backendLogger, server)
};

export { init };
