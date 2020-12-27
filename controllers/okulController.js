const async = require("async")
const Okul = require("../models/okul")
const Firma = require("../models/firma")

exports.list = async(req,res,next)=>{
    let okul = await Okul.find({ })
    let firma = await Firma.find({ })
    res.render("back/okul",{
        okul:okul,
        firma:firma
    })
}

exports.insert = async(req,res,next)=>{
    new Okul(req.body).save((err,data)=>{
        if (err) {
            console.log(err)
        } else {
            res.redirect("/admin/okul")
        }
    })
}

exports.delete = async(req,res,next)=>{
    let okul = await Okul.findById({"_id":req.params.id})
    okul.remove((err,data)=>{
        if (!err) {
            res.redirect("/admin/okul")
        }
    })
}