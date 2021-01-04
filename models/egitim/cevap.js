const mongoose = require("mongoose")
const Schema = mongoose.Schema

 const cevapSchema = new Schema({
    sinav:Object,
    ogrenci:Object,
    cevap:Array,
    createdAt:{
        type:Date,
        default:Date.now
    }
 })

 module.exports = mongoose.model("Cevap",cevapSchema)