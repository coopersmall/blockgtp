import { config } from 'dotenv';
import { logger } from '../infrastructure/logger';
import { services } from '../services';

const SERVICE_NAME = 'backend';

const configure = ({ aiClient, server, httpClient }) => {
  config();

  const log = logger.init(SERVICE_NAME);

  log.info('Initializing HTTP server');
  let httpServer = server.init();

  log.info('Initializing Services');
  services.init({ aiClient, httpServer, httpClient });

  log.info('Starting Services');
  services
    .start()
    .then(log.info('Successfully Started Services'))
    .catch((err) => {
      log.error(err);
      throw err;
    });

  log.info('Starting HTTP server');
  server.start(httpServer, log);
};

export { configure };
