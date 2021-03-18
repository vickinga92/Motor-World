const { Motos } = require('../models');

const obtenerMotoPorMarca = async (req, res) => {

    let searchBrand = req.params.brand
  
    let filtersBrand = await Motos.find({ brand: searchBrand }).exec()
  
    if (!filtersBrand) {
      res.status(404).json({ 'message': 'El elemento que intentas obtener no existe' })
      return
    }
    res.json(filtersBrand)
  }

  module.exports = {
     obtenerMotoPorMarca
}