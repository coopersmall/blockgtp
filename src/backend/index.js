const { server } = require('./server');
const { configure } = require('./configure');
const { newLogger } = require('./infrastructure/logger');

const init = () => {
  const logger = newLogger('backend');

  configure(server)
    .then((port) => {
      server.listen(port, () => {
        logger.info(`Listening on port ${port}`);
      });
    })
    .catch((err) => {
      logger.error(err);
    });
};

module.exports = { init };
