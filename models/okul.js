const mongoose = require("mongoose")
const Schema = mongoose.Schema

const okulSchema = new Schema({
    okul:String,
    il:String,
    ilce:String,
    yetkili:String,
    adres:String,
    tel:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Okul",okulSchema)