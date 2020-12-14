const async = require("async")
const Ogrenci = require("../models/ogrenci")
const Okul = require("../models/okul")

exports.index = async(req,res,next)=>{
    let ogrenci = await Ogrenci.find({}).count()
    let okul = await Okul.find({}).count()
    res.render('back/index', {
        ogrenci:ogrenci,
        okul:okul
    });
}
