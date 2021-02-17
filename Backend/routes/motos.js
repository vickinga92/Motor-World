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

  router.route('/motos/filters')
    .get(async (req,res)=>{

      const { brand = null, 
              priceA = null, 
              priceB = null, 
              type = null, 
              displacementA = null, 
              displacementB = null } = req.query;     

      const queryObj = {
        brand,
        price: { $gte: priceA, $lte: priceB}, 
        type,
        displacement: {$gte: displacementA, $lte: displacementB}
      };   
      
     
      if (queryObj['brand'] === null) delete queryObj['brand'];
      if (queryObj['type'] === null) delete queryObj['type'];

      if (queryObj.price.$gte === null && queryObj.price.$lte === null){
        delete queryObj['price'];
      }else if (queryObj.price.$gte === null){
        delete queryObj.price.$gte;
      }else if (queryObj.price.$lte === null){
        delete queryObj.price.$lte;
      }

      if (queryObj.displacement.$gte === null && queryObj.displacement.$lte === null){
        delete queryObj['displacement'];
      }else if (queryObj.displacement.$gte === null){
        delete queryObj.displacement.$gte;
      }else if (queryObj.displacement.$lte === null){
        delete queryObj.displacement.$lte;
      }    

      let filters = await Motos.find(queryObj).exec()

     
      if (!filters) {
        res.status(404).json({ 'message': 'El elemento que intentas obtener no existe' })
        return
      }
     
      res.json(filters)

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