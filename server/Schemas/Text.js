const mongoose = require('mongoose')

const TextSchema = new mongoose.Schema({
    text:{type: String}
})

module.exports = mongoose.model('Text',TextSchema)