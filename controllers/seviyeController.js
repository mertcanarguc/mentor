const async = require("async")
const Seviye = require("../models/sistem/seviye")

exports.list = async (req, res, next) => {
    let seviye = await Seviye.find({})
    res.render("back/seviye", {
        seviye:seviye
    })
}

exports.insert = async (req, res, next) => {
    new Seviye({
        seviye: req.body.seviye
    }).save((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect("/admin/seviye")
        }
    })
}

exports.delete = async(req,res,next)=>{
    let seviye = await Seviye.findById({"_id":req.params.id})

    seviye.remove((err,data)=>{
        if (!err) {
            res.redirect("/admin/seviye")
        }
    })
}