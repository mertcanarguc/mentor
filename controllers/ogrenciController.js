const async = require("async")
const User = require("../models/user")
const Seviye = require("../models/sistem/seviye")

exports.list = async(req,res,next)=>{
    let ogrenci = await User.find({"tip":4})
    let okul = await User.find({"tip":2})
    let sinif = await User.find({"tip":3})
    let seviye = await Seviye.find({})
    res.render("back/ogrenci/list",{
        ogrenci:ogrenci,
        okul:okul,
        sinif:sinif,
        seviye:seviye
    })
}


exports.detail = async(req,res,next)=>{
    let ogrenci = await User.findById({"_id":req.params.id})

    res.render("back/detail",{
        ogrenci:ogrenci
    })
}

exports.delete = async(req,res,next)=>{
    let ogrenci = await User.findById({"_id":req.params.id})

    ogrenci.remove((err,data)=>{
        if (err) {
            console.log(err)
        }else{
            res.redirect("/admin/ogrenci")
        }
    })
}