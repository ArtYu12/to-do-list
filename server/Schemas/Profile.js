const { default: mongoose } = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    name:{type:String,require:true},
    login:{type:String,require:true},
    password:{type:String,require:true},
    text:{type:String,require:true},
    file:{type:String}
})


module.exports = mongoose.model('Profile',ProfileSchema)