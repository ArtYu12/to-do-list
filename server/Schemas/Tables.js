const { default: mongoose } = require("mongoose");

const DataSchema = new mongoose.Schema({
    name:String,
    status:[String],
    _id:{type:String,require:false}
})
const InfoSchema = new mongoose.Schema({
    days:[String | Number],
    items:[String],
    data:[DataSchema],
    _id:{type:String,require:false}
})
const TablesSchema = new mongoose.Schema({
    title:String,
    tableData:InfoSchema,
})



module.exports = mongoose.model('Tables',TablesSchema)