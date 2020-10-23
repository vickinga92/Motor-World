const mongoose = require('mongoose')
const express = require('express')
const { json } = require('express')
const router = express.Router()
const Motos = require('../models/motos')


router.route('/brand/:brand')
  .get(async (req, res) => {

    let searchBrand = req.params.brand

    let filtersBrand = await Motos.find({ brand: searchBrand }).exec()

    if (!filtersBrand) {
      res.status(404).json({ 'message': 'El elemento que intentas obtener no existe' })
      return
    }

    res.json(filtersBrand)

  })

module.exports = router
