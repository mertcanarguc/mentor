const mongoose = require("mongoose")
const Schema = mongoose.Schema

const sinavSchema = new Schema({
    name:String,
    soru:Array,
    seviye:String,
    //SİSTEM SAHİBİ TARAFINDAN EKLENEN SINAV AKTİF HALE GETİRİLMEDİKÇE FİRMA, OKUL, ÖĞRETMEN VEYA ÖĞRENCİ
    //TARAFINDAN GÖRÜNTÜLENEMEZ
    yayin:{ 
        type:Boolean,
        default:false
    },
    //OKUL SAHİBİ TARAFINDAN AKTİF EDİLEMEYEN SINAV ÖĞRETMEN VEYA ÖĞRENCİLER TARAFINDAN GÖRÜNTÜLENEMEZ
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Sinav",sinavSchema)