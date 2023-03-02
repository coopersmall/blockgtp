const configure = async (server) => {
  return process.env.PORT || 8000;
};

module.exports = { configure }
