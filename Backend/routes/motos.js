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

router.route('/motos/filter/:price')
.get(async (req, res) => {
  let searchBrand = req.params.brand
  let searchPrice = req.params.price
  let filterPriceA = { price: 1 }

  let filtersPriceA = await Motos.find({ brand: searchBrand },{ price: {$gte:searchPrice}}).sort(filterPriceA).exec()


  if (!filtersPriceA) {
    res.status(404).json({ 'message': 'El elemento que intentas obtener no existe' })
    return
  }

  res.json(filtersPriceA)
})

router.route('/motos/filter-priceB/:price')
.get(async (req, res) => {

  let searchPrice = req.params.price
  let filterPriceB = { price: 1 }

  
  let filtersPriceB = await Motos.find({ price: {$lte:searchPrice}}).sort(filterPriceB).exec()

  if (!filtersPriceB) {
    res.status(404).json({ 'message': 'El elemento que intentas obtener no existe' })
    return
  }

  res.json(filtersPriceB)
})
router.route('/motos/filter/:type')
.get(async (req, res) => {

  let searchType = req.params.type

  let filtersType = await Motos.find({ type: searchType }).exec()

  if (!filtersType) {
    res.status(404).json({ 'message': 'El elemento que intentas obtener no existe' })
    return
  }

  res.json(filtersType)
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