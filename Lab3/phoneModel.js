const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema({
    ten: {
        type: String,
        required: true
    },
    hang: {
        type: String,
        required: true
    },
    namSX: {
        type: Number,
    },
    gia: {
        type: Number,
    },

});

const phoneModel = new mongoose.model('phone', phoneSchema);
module.exports = phoneModel;