const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
