
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27018/read-it-later', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
