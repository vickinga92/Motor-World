const mongoose = require('mongoose')
const express = require('express')
const { json } = require('express')
const router = express.Router()
const Motos = require('../models/motos')


router.route('/motos')
  .get(async (req, res) => {
    let MotosList = await Motos.find().exec()

    res.json(MotosList)

  })

router.route('/motos/filter/:brand')
.get(async (req, res) => {

  let searchBrand = req.params.brand

  let filtersBrand = await Motos.find({ brand: searchBrand }).exec()

  if (!filtersBrand) {
    res.status(404).json({ 'message': 'El elemento que intentas obtener no existe' })
    return
  }

  res.json(filtersBrand)
})

router.route('/motos/:id')
  .get(async (req, res) => {

    let searchMoto = req.params.id

    let foundMoto = await Motos.find({ id: searchMoto }).exec()

    if (!foundMoto) {
      res.status(404).json({ 'message': 'El elemento que intentas obtener no existe' })
      return
    }

    res.json(foundMoto)

  })



module.exports = router