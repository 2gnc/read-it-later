const mongoose = require('mongoose');

const { Schema } = mongoose;

const tagSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
});

const TagModel = mongoose.model('Tag', tagSchema);

module.exports = TagModel;
