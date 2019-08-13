// const path = require('path')
const express = require('express');
// const config = require('./utils/config');
const userData = require('./api/v1/user-data');

require('./database/index');

const app = express()
    .use(express.static('../client/build'))
    .use(express.json())
    .use(userData)
    .get('*', (req, res) => {
        return res.sendFile('index.html', {root: '../client/build/'})
    });

const port = process.env.PORT || 5000;
console.debug(`__dirname ${__dirname}`);
app.listen(port, () => console.log(`Listening on port ${port}`));
