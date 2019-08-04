const ENV = process.env.NODE_ENV || 'development';

const config = require(`../../configs/${ENV}`);

module.exports = config;
