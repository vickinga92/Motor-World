const mongoose = require('mongoose')
const express = require('express')
const { json } = require('express')
const router = express.Router()
const Motos = require('../models/motos')


router.route('/comparador/model')
  .get(async (req, res) => {
   
    let filters = req.params.model
    let comparador = await Motos.findOne({model: filters}).exec()

    if (!comparador) {
      res.status(404).json({ 'message': 'El elemento que intentas obtener no existe' })
      return
    }

    res.json(comparador)

  })

  
module.exports = router