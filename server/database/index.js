const mongoose = require('mongoose');

if(process.env.NODE_ENV !== 'production') {
    mongoose
    .connect('mongodb://127.0.0.1:27018/read-it-later', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.info('Mongo connected - ok');
    })
    .catch(e => {
        console.error('Mongo connection error: ', e);
    });
}
