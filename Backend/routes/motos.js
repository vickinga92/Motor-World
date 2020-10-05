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

  
  router.route('/motos/:id')
  .get(async (req, res) => {

    let searchId = req.params.id

    let foundItem = await Post.findOne(searchId).exec()

    if (!foundItem) {
      res.status(404).json({ 'message': 'El elemento que intentas obtener no existe' })
      return
    }

    res.json(foundItem)
  })


module.exports = router