const express = require('express');
const router = express.Router();
const bransController = require("../controllers/bransController")
const seviyeController = require("../controllers/seviyeController")
const ogrenciController = require("../controllers/ogrenciController")
const okulController = require("../controllers/okulController")
const mainController = require("../controllers/mainController")

/* GET home page. */
router.get('/admin',mainController.index);

router.get("/admin/brans",bransController.list)
router.post("/admin/brans",bransController.insert)
router.get("/admin/brans/sil/:id",bransController.delete)

router.get("/admin/seviye",seviyeController.list)
router.post("/admin/seviye",seviyeController.insert)
router.get("/admin/seviye/sil/:id",seviyeController.delete)

router.get("/admin/ogrenci",ogrenciController.list)
router.post("/admin/ogrenci",ogrenciController.insert)
router.get("/admin/ogrenci/sil/:id",ogrenciController.delete)
router.get("/admin/detail/:id",ogrenciController.detail)

router.get("/admin/okul",okulController.list)
router.post("/admin/okul/insert",okulController.insert)
router.get("/admin/okul/sil/:id",okulController.delete)


module.exports = router;
