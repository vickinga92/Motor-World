const mongoose = require('mongoose')
const express = require('express')
const { json } = require('express')
const router = express.Router()
const Favorites = require('../models/favorites')
const User = require('../models/users')
const mustAuth = require('../middlewares/mustAuth')


router.route('/favorites')
  .get(mustAuth(), async (req, res) => {
    filters = { userId: req.user._id }
    const respuesta = [];
    const  favoritesMotos = await Favorites.find(filters)    
    .populate({ path: 'motoId', model: 'motos'})
       
    res.json(favoritesMotos.map(m => m.motoId))

  })
  .post(mustAuth(), async (req, res) => {
    
    try {

      const motoId =  req.body.motoId;
      const userId =  req.user._id;
      
      const existeMoto = await Favorites.findOne({ motoId });
      if ( existeMoto ) {
        return res.json(existeMoto);
      }

      let favoriteInMongo = await new Favorites({userId, motoId}).save()

      res.json(favoriteInMongo);

    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  })

router.route('/favorites/filterDesc')
  .get(mustAuth(), async (req, res) => {

    filters = { userId: req.user._id }
    filterPriceDesc = { price: -1 }
    let priceDesc = await Favorites.find(filters).sort(filterPriceDesc).exec()

    res.json(priceDesc)
  })
router.route('/favorites/filterAsc')
  .get(mustAuth(), async (req, res) => {
    filters = { userId: req.user._id }
    let filterPriceAsc = { price: 1 }
    let priceAsc = await Favorites.find(filters).sort(filterPriceAsc).exec()

    res.json(priceAsc)
  })
router.route('/favorites/:id')
  .get(mustAuth(), async (req, res) => {

    let searchId = req.params.id

    let foundItem = await Favorites.findOne(searchId).exec()

    if (!foundItem) {
      res.status(404).json({ 'message': 'El elemento que intentas obtener no existe' })
      return
    }

    res.json(foundItem)
  })
  .delete(mustAuth(), async (req, res) => {

    let searchId = req.params.id


    let foundItem = await Favorites.findOneAndDelete({ _id: searchId }).exec()

    if (!foundItem) {
      res.status(404).json({ 'message': 'El elemento que intentas eliminar no existe' })
      return
    }

    res.status(204).json({ 'message': 'El elemento se ha eliminado correctamente' })
  });


module.exports = router