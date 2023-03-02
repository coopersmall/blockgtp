const configure = (logger, server) => {
  logger.info('Initializing HTTP server')
  let httpServer = server.init()

  logger.info('Starting HTTP server')
  server.start(httpServer, logger)
};

export { configure };
