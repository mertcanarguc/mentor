const async = require("async")
const Ogrenci = require("../models/auth/ogrenci")
const Okul = require("../models/auth/okul")
const Seviye = require("../models/sistem/seviye")

exports.list = async(req,res,next)=>{
    let ogrenci = await Ogrenci.find({})
    let okul = await Okul.find({})
    let seviye = await Seviye.find({})
    res.render("back/ogrenci",{
        ogrenci:ogrenci,
        okul:okul,
        seviye:seviye
    })
}

exports.insert = async(req,res,next)=>{
    new Ogrenci(req.body).save((err,data)=>{
        if (err) {
            console.log(err)
        }else{
            res.redirect("/admin/ogrenci")
        }
    })
}

exports.detail = async(req,res,next)=>{
    let ogrenci = await Ogrenci.findById({"_id":req.params.id})

    res.render("back/detail",{
        ogrenci:ogrenci
    })
}

exports.delete = async(req,res,next)=>{
    let ogrenci = await Ogrenci.findById({"_id":req.params.id})

    ogrenci.remove((err,data)=>{
        if (err) {
            console.log(err)
        }else{
            res.redirect("/admin/ogrenci")
        }
    })
}