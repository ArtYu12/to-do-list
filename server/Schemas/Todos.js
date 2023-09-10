const mongoose = require('mongoose')

const TodosSchema = new mongoose.Schema({
    title:String,
    data:String,
    completed:Boolean
})

module.exports = mongoose.model('Todos',TodosSchema)