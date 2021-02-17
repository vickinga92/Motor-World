const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const Favorites = require('../models/favorites')
const mustAuth = require('../middlewares/mustAuth')

router.route('/favorites')
  .get(mustAuth(), async (req, res) => {
    
    filters = { userId: req.user._id }

    const favorites = await Favorites.find(filters)     
    .populate({ path: 'motoId', model: 'motos'})
    .populate({ path: 'postId', model: 'postModel'})
 
    res.json(favorites)

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
  .put(mustAuth(), async (req, res) => {
    
    try {

      let params; 
      const favoriteId =  req.params.id;     
      const userId =  req.user._id;      
      const isMoto = req.body.isMoto;

      isMoto ? params = {$addToSet: {motoId : favoriteId}} : params = {$addToSet: {postId : favoriteId}}     
      
      let favoriteInMongo = await Favorites.findOneAndUpdate({userId: userId},params,
        {new:true, upsert : true })

      res.json(favoriteInMongo);

    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  })
  .delete(mustAuth(), async (req, res) => {
    try {
     
      const favoriteId = req.params.id;      
      const userId =  req.user._id; 

      let foundItem = await Favorites.findOneAndUpdate(
        {userId: userId},{$pull: {motoId :{ $in: favoriteId }, postId :{ $in: favoriteId }}})

      if (!foundItem) {
        res.status(404).json({ 'message': 'El elemento que intentas eliminar no existe' })
        return
      }

      res.status(204).json({ 'message': 'El elemento se ha eliminado correctamente' })

    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  });

module.exports = router