const async = require("async")
const User = require("../models/user")
const Seviye = require("../models/sistem/seviye")

exports.list = async(req,res,next)=>{
    let sinif = await User.find({"tip":3})
    let okul = await User.find({"tip":2})
    let seviye = await Seviye.find({ })
    res.render("back/sinif/list",{
        sinif:sinif,
        okul:okul,
        seviye:seviye
    })
}

exports.delete = async(req,res,next)=>{
    let sinif = await User.findById({"_id":req.params.id})

    sinif.remove((err,data)=>{
        if (!err) {
            res.redirect("/admin/sinif")
        }
    })
}