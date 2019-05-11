const mongoose = require ('mongoose');

const springSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    lat: {
        type: String,
        required: true,
        unique: true
    },

    long: {
        type: String,
        required: true,
        unique: true
    }

})

const Spring = mongoose.model('Spring', springSchema);

module.exports = Spring;