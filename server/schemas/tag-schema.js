const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
});

const TagModel = mongoose.model('Tag', tagSchema);

module.exports = TagModel;
