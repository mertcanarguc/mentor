var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();
const async = require("async")

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { user: req.user });
});

router.get('/register', function (req, res) {
  res.render('register', {});
});

router.post('/register', function (req, res) {
  User.register(new User(req.body),
    req.body.password, function (err, user) {
      if (err) {
        return res.render('register', { user: user });
      } else {
        res.json({
          status: true,
          message: "User girişi başarılı"
        })
      }
    });
});

router.post('/register/okul', async function (req, res) {
  let ust = await User.findById({"_id":req.body.ust})
  User.register(new User({
    tip:req.body.tip,
    username:req.body.username,
    password:req.body.password,
    okul:req.body.okul,
    adres:req.body.adres,
    il:req.body.il,
    ilce:req.body.ilce,
    ust:ust
  }),
    req.body.password, function (err, user) {
      if (err) {
        return res.render('register', { user: user });
      } else {
        res.json({
          status: true,
          message: "User girişi başarılı"
        })
      }
    });
});

router.post('/register/sinif', async function (req, res) {
  let ust = await User.findById({"_id":req.body.ust})
  User.register(new User({
    tip:req.body.tip,
    username:req.body.username,
    password:req.body.password,
    sinif:req.body.sinif,
    adsoyad:req.body.adsoyad,
    seviye:req.body.seviye,
    ust:ust
  }),
    req.body.password, function (err, user) {
      if (err) {
        return res.render('register', { user: user });
      } else {
        res.json({
          status: true,
          message: "User girişi başarılı"
        })
      }
    });
});


router.get('/login', function (req, res) {
  res.render('login', { user: req.user });
});

router.post('/login', passport.authenticate('local'), function (req, res) {
  res.redirect('/');
});

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});


module.exports = router;

