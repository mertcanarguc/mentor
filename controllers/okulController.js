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

exports.delete = async(req,res,next)=>{
    let okul = await User.findById({"_id":req.params.id})
    okul.remove((err,data)=>{
        if (!err) {
            res.redirect("/admin/okul")
        }
    })
}