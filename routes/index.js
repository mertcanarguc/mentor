const express = require('express');
const router = express.Router();
const bransController = require("../controllers/bransController")
const seviyeController = require("../controllers/seviyeController")
const mainController = require("../controllers/mainController")
const firmaController = require("../controllers/firmaController")
const okulController = require("../controllers/okulController")
const sinifController = require("../controllers/sinifController")

/* GET home page. */
router.get('/admin',mainController.index);

router.get("/admin/brans",bransController.list)
router.post("/admin/brans",bransController.insert)
router.get("/admin/brans/sil/:id",bransController.delete)

router.get("/admin/seviye",seviyeController.list)
router.post("/admin/seviye",seviyeController.insert)
router.get("/admin/seviye/sil/:id",seviyeController.delete)

router.get("/admin/firma",firmaController.list)
router.get("/admin/firma/sil/:id",firmaController.delete)

router.get("/admin/okul",okulController.list)
router.get("/admin/okul/sil/:id",okulController.delete)

router.get("/admin/sinif",sinifController.list)
router.get("/admin/sinif/sil/:id",sinifController.delete)

module.exports = router;
