const mongoose = require('mongoose');

const { Schema } = mongoose;

const recordSchema = new Schema({
    _id: Schema.Types.ObjectId,
    header: {
        type: String,
        required: true,
    },
    description: String,
    img: String,
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
});

const RecordModel = mongoose.model('Record', recordSchema);

module.exports = RecordModel;
