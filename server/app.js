const config = require('./utils/config');
const path = require('path')
const userData = require('./api/v1/user-data');

require('./database/index');

const express = require('express');
const publicPath = path.join(__dirname, '../client/build');

const app = express()
    .use(express.json())
    .use(userData)
    .get('/', (req, res) => {
        return res.sendFile(path.join(publicPath, 'index.html'))
    });

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
