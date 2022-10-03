//--- DB

const db = require('../database/models/index.js');
const Operacion = db.Operacion;


// ************ Controllers ************

const apiController = {

    list: (req, res) => {
        Operacion.findAll()
            .then(items => {
                let respuesta = {
                    count: items.length,
                    data: items
                }
                res.json(respuesta);
            })
    }

}

module.exports = apiController;