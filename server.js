const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3030;
const server = express();

server.use(bodyParser.json());
server.use(cors());

server.get('/', (req, res) => {
    res.send(`Hello world from port ${port}`);
})

server.post('/payload', (req, res) => {
    res.json(req.body);
})

server.listen(port, error => { 
    if (error) console.error(error);
    console.log(`Server listening on port ${port}`);
});