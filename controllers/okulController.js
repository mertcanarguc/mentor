const async = require("async")
const User = require("../models/user")

exports.list = async(req,res,next)=>{
    let okul = await User.find({"tip":2})
    let firma = await User.find({"tip":1})
    res.render("back/okul/list",{
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
    let okul = await User.findById({"_id":req.params.id})
    okul.remove((err,data)=>{
        if (!err) {
            res.redirect("/admin/okul")
        }
    })
}