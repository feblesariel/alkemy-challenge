// ************ Require's ************

const express = require("express");
const router = express.Router();
const path = require("path");
const {body} = require("express-validator");

// ************ Controller Require ************

const mainController = require("../controllers/mainController");

// ************ Rutas ************

router.get("/", mainController.home);

router.get("/operar", mainController.operar);
router.post("/new", mainController.new);
router.delete("/delete/:id", mainController.delete);
router.get("/edit/:id", mainController.edit);
router.put("/edit/:id", mainController.editProcces);





module.exports = router;