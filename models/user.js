const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const User = new Schema({
    username:String,
    password:String,
    adsoyad:String,
    mail:String,
    tip:Number, // 0 Admin 1 Firma 2 Okul 3 Öğretmen / Sınıf 4 Öğrenci  
    ust:{
        type:Object,
        default:{}
    },
    il:String,
    ilce:String,
    adres:String,
    tel:String,
    createdAt:{
        type:Date,
        default:Date.now
    },
    firma:String, //EKLENEN FİRMAYSA ADI BURAYA
    okul:String //EKLENEN OKULSA ADI BURAYA,
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);