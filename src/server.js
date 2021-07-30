const express = require('express');
const next = require('next');
const setupProxy = require('./setupProxy');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

const isDevelopment = process.env.NODE_ENV !== 'production';
console.log('customer server.js');
app.prepare().then(() => {
    const server = express();

    // 开发模式 设置代理
    if (isDevelopment) {
        setupProxy(server);
    }

    // TODO 生产环境代理如何设置？ 通过 server.js ? 通过ng？

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
}).catch(err => {
    console.log('Error:::::', err);
});
