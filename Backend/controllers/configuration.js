const { Configuration } = require('../models');

const leerConfiguracion = async (req, res) => {

   const conf = await Configuration.find().exec()

    res.json(conf)

}

module.exports = {

    leerConfiguracion
}