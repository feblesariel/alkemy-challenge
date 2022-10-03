// ************ Require's ************

const express = require("express");
const router = express.Router();
const path = require("path");
const {body} = require("express-validator");


// ************ Validations ************

// const validationsRegisterForm = [
//     body("name").notEmpty().withMessage("Debes ingresar un nombre de usuario.").bail().isLength({ min: 2}).withMessage("El nombre de usuario debe tener al menos 2 caracteres."),
//     body("password").notEmpty().withMessage("Debes ingresar una contraseña para el usuario.").bail().isLength({ min: 8 }).withMessage("La contraseña debe tener un minimo 8 caracteres."),
//     body("domicilio").notEmpty().withMessage("Debes ingresar un domicilio."),
//     body("zipcode").notEmpty().withMessage("Debes ingresar un codigo postal."),
//     body("email").notEmpty().withMessage("Debes ingresar un correo electronico.").bail().isEmail().withMessage("Debes usar un formato valido para el correo."),
// ];

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