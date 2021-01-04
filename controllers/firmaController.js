const async = require("async")
const Firma = require("../models/user")

exports.list = async(req,res,next)=>{
    let firma = await Firma.find({"tip":1})
    res.render("back/firma/list",{
        firma:firma,
    })
}

exports.detail = async(req,res,next)=>{
    res.render("back/firma/detail",{

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