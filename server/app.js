const path = require('path');
const express = require('express');
// const config = require('./utils/config');
const userData = require('./api/v1/user-data');

require('./database/index');

const clientPath = path.join(__dirname, '..', 'client/build');

const app = express()
    .use(express.static(`${clientPath}`))
    .use(express.json())
    .use(userData)
    .get('*', (req, res) => {
        return res.sendFile(`${clientPath}/index.html`)
    });

const port = process.env.PORT || 5000;
console.debug(`__dirname: ${__dirname}`);
console.debug('clientPath', clientPath);
app.listen(port, () => console.log(`Listening on port ${port}`));
