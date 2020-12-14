const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ogrenciSchema = new Schema({
    ad:String,
    soyad:String,
    okulno:String,
    sinif:String,
    seviye:String,
    veli:String,
    tel:String,
    mail:String,
    okul:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Ogrenci",ogrenciSchema)