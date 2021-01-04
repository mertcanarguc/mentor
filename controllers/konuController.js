const async = require("async")
const Seviye = require("../models/sistem/seviye")
const Konu = require("../models/sistem/konu")

exports.list = async(req,res,next)=>{
    let seviye = await Seviye.find({})
    let konu = await Konu.find({})
    res.render("back/konu",{
        seviye:seviye,
        konu:konu
    })
}

exports.insert = async(req,res,next)=>{
    new Konu({
        s:req.body.s,
        konu:req.body.konu
    }).save((err,data)=>{
        if (err) {
            console.log(err)
        } else {
            res.redirect("/admin/konu")
        }
    })
}