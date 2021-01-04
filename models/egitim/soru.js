const mongoose = require("mongoose")
const Schema = mongoose.Schema

const soruSchema = new Schema({
    title:String,
    soru:String,
    resim:String,
    seviye:String,
    konu:String,  // Konu seviyeye göre eklenecek
    dogru:String,
    sik:{
        type:Array,
        default:[]
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Soru",soruSchema)