const mongoose = require("mongoose")
const Schema = mongoose.Schema

const soruSchema = new Schema({
    soru:String,
    seviye:String,
    konu:String,  // Konu seviyeye göre eklenecek
    secenek:Array, // A B C D E   Doğru Yanlış
    dogru:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Soru",soruSchema)