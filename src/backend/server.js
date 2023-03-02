const express = require('express');

const server = express();
server.get('/api/health', (req, res) => res.send('ok'));

module.exports = { server };
