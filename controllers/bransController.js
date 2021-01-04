const async = require("async")
const Brans = require("../models/sistem/brans")

exports.list = async (req, res, next) => {
    let brans = await Brans.find({})
    res.render("back/brans", {
        brans:brans
    })
}

exports.insert = async (req, res, next) => {
    new Brans({
        brans: req.body.brans
    }).save((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect("/admin/brans")
        }
    })
}

exports.delete = async(req,res,next)=>{
    let brans = await Brans.findById({"_id":req.params.id})

    brans.remove((err,data)=>{
        if (!err) {
            res.redirect("/admin/brans")
        }
    })
}