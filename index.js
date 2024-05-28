const express = require('express');

const server = express();

const router = require('./routes/product');

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello World');
});

server.use('/product', router.router);



server.listen(3000, () => {
    console.log('Server is running on port 3000');
});