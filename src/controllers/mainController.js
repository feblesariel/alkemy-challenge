// ************ Requires ************

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

//--- DB

const db = require('../database/models/index.js');
const Operacion = db.Operacion;


// ************ Controllers ************

const mainController = {

    home: function (req, res) {

        let total = 0
        let array = []

        fetch("http://localhost:3000/api/movimientos")
            .then(response => response.json())
            .then(result => {


                for (let i = 0; i < result.count; i++) {     
                    
                    array.push(result.data[i])

                    if (result.data[i].tipo == "ingreso"){
                        total += result.data[i].monto
                    } else total -= result.data[i].monto

                }

                res.render("index", { total, array})

            })

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