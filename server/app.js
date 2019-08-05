const config = require('./utils/config');
const api = require('./api/index');
const routes = require('./routes/index');

require('./database/index');

const express = require('express');

const app = express()
    .use(express.json())
    .use(api)
    .use(routes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
