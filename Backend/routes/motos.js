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

router.route('/motos/brand/:brand')
.get(async (req, res) => {
  let searchBrand = req.params.brand


  let filtersBrand = await Motos.find({ brand: searchBrand}).exec()

  if (!filtersBrand) {
    res.status(404).json({ 'message': 'El elemento que intentas obtener no existe' })
    return
  }

  res.json(filtersBrand)
})

router.route('/motos/filterPrice/:priceA/:priceB')
.get(async (req, res) => {
  let searchPriceA = req.params.priceA
  let searchPriceB = req.params.priceB

  let filterPrice = { price: 1 }
 
  let filtersPrice = await Motos.find({price: { $gte : searchPriceA , $lte : searchPriceB}}).sort(filterPrice).exec()

  if (!filtersPrice) {
    res.status(404).json({ 'message': 'El elemento que intentas obtener no existe' })
    return
  }

  res.json(filtersPrice)
})
 
 router.route('/motos/type/:type')
.get(async (req, res) => {
  let searchType = req.params.type

  let filtersType = await Motos.find({ type: searchType }).exec()

  if (!filtersType) {
    res.status(404).json({ 'message': 'El elemento que intentas obtener no existe' })
    return
  }

  res.json(filtersType)
})  

router.route('/motos/filterDisplacement/:displacementA/:displacementB')
.get(async (req, res) => {
  let displacementA = req.params.displacementA
  let displacementB = req.params.displacementB
 
  let filtersDisplacement = await Motos.find({displacement: { $gte : displacementA , $lte : displacementB}}).exec()

  if (!filtersDisplacement) {
    res.status(404).json({ 'message': 'El elemento que intentas obtener no existe' })
    return
  }

  res.json(filtersDisplacement)
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