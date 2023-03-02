import express from 'express';

const init = () => {
    const app = express();
    app.get('/api/health', (req, res) => res.send('ok'));
    return app
}

const start = (app, logger, port = process.env.PORT) => {
    app.listen(port, () => {
        logger.info(`Listening on port ${port}`);
    });
}

 const server = {
    init,
    start
}

export { server };
