const async = require("async")
const Firma = require("../models/firma")

exports.list = async(req,res,next)=>{
    let firma = await Firma.find({ })
    res.render("back/firma",{
        firma:firma,
    })
}

exports.insert = async(req,res,next)=>{
    new Firma(req.body).save((err,data)=>{
        if (err) {
            console.log(err)
        } else {
            res.redirect("/admin/firma")
        }
    })
}

exports.delete = async(req,res,next)=>{
    let firma = await Firma.findById({"_id":req.params.id})
    firma.remove((err,data)=>{
        if (!err) {
            res.redirect("/admin/firma")
        }
    })
}