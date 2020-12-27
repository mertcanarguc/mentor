const mongoose = require("mongoose")
const Schema = mongoose.Schema

const okulSchema = new Schema({
    okul:String,
    firma:String,
    il:String,
    ilce:String,
    adres:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Okul",okulSchema)