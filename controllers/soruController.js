const async = require("async")
const Konu = require("../models/sistem/konu")
const Seviye = require("../models/sistem/seviye")
const Soru = require("../models/egitim/soru")

exports.ekle = async (req, res, next) => {
    let konu = await Konu.find({})
    let seviye = await Seviye.find({})

    res.render("back/soru/soru", {
        seviye: seviye,
        konu: konu
    })
}

exports.soru = async (req, res, next) => {
    let soru = await Soru.findById({ "_id": req.params.id })
    res.render("back/soru/detail", {
        soru: soru
    })
}

exports.sikekle = async (req, res, next) => {
    var objFriends = { sik: req.body.sik, resim: req.body.resim };
    Soru.findOneAndUpdate(
        { "_id": req.body.soruid },
        { $push: { sik: objFriends } },
        function (error, success) {
            if (error) {
                console.log(error);
            } else {
                res.redirect("/admin/soru/"+req.body.soruid)
            }
        });
}

exports.insert = async (req, res, next) => {
    new Soru(req.body).save((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect("/admin/soru/" + data._id)
        }
    })
}

exports.delete = async (req, res, next) => {

}