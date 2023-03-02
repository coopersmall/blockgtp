const configure = async (server) => {
  server.PORT;
  return process.env.PORT || 8000;
};

module.exports = { configure };
