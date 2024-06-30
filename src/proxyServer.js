const express = require('express');
const request = require('request');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for proxy server

app.use('/proxy', (req, res) => {
    const apiUrl = 'http://193.19.100.32:7000' + req.url;
    req.pipe(request(apiUrl)).pipe(res);
});

app.listen(3000, () => {
    console.log('Proxy server running on port 3000');
});
