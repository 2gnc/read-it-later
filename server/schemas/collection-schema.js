const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    description: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    isPrivate: Boolean,
    records: [{ type: Schema.Types.ObjectId, ref: 'Record' }]
});

const CollectionModel = mongoose.model('Collection', collectionSchema);

module.exports = CollectionModel;
