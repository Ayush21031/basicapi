const express = require('express');

const server = express();

const router = require('./routes/product');

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello World');
});

server.get('/update', (req, res) => {
    res.send('Update');
});

server.get('/update2', (req, res) => {
    res.send('this Update2 with gcp automation');
});

server.get('/update3', (req, res) => {
    res.send('this Update3 with gcp');
});

server.use('/product', router.router);



server.listen(3000, () => {
    console.log('Server is running on port 3000');
});