// ************ Requires ************

const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const { stringify } = require("querystring");

//--- DB

const db = require('../database/models/index.js');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const { log } = require("console");

const Operacion = db.Operacion;


// ************ Controllers ************

const mainController = {

    home: function (req, res) {
        res.render("index")
    },

    operar: function (req, res) {

        Operacion.findAll().then(operaciones => {
            res.render('operar', { operaciones })
        });

    },

    new: function (req, res) {

        Operacion.create(
            {
                concepto: req.body.concepto,
                monto: req.body.monto,
                tipo: req.body.categoria
            }
        ).then(() => {
            res.redirect("/operar")
        })

    },

    delete: function (req, res) {

        let operacionId = req.params.id;

        Operacion.destroy({ where: { id: operacionId } })
            .then(() => {
                res.redirect("/operar")
            })

    },

    edit: function (req, res) {

        Operacion.findByPk(req.params.id, {})
            .then((old) => {
                res.render('edit', { old });
            })
    },

    editProcces: function (req, res) {

        let operacionId = req.params.id;

        console.log(req.body);

        Operacion.update(
            {
                concepto: req.body.concepto,
                monto: req.body.monto,
                tipo: req.body.categoria
            },
            {
                where: { id: operacionId }
            })
            .then(() => {
                res.redirect("/operar")
            })

    },
}


module.exports = mainController;