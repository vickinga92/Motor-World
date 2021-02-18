const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const Favorites = require('../models/favorites')
const mustAuth = require('../middlewares/mustAuth')

router.route('/favorites')
  .get(mustAuth(), async (req, res) => {
    
    filter = { userId: req.user._id }

    const favorites = await Favorites.find(filter)     
    .populate({ path: 'motoId', model: 'motos'})
    .populate({ path: 'postId', model: 'postModel'})
 
    res.json(favorites)

  })

router.route('/favorites/:id')
  .get(mustAuth(), async (req, res) => {

    let favoriteId = req.params.id

    let favorite = await Favorites.findOne(favoriteId).exec()

    if (!favorite) {
      res.status(404).json({ 'message': 'El elemento que intentas obtener no existe' })
      return
    }

    res.json(foundItem)
  })
  .put(mustAuth(), async (req, res) => {

      let params; 
      const favoriteId =  req.params.id;     
      const userId =  req.user._id;      
      const isMoto = req.body.isMoto;
    
    try {

      isMoto ? params = {$addToSet:{motoId:favoriteId}} : params = {$addToSet:{postId:favoriteId}}     
      
      let favorites = await Favorites.findOneAndUpdate({userId: userId},params,{new:true,upsert:true});
     
      res.json({favorites});

    } catch (e) {
      res.status(500).json({ error: e.message })
    }

 
  })
  .delete(mustAuth(), async (req, res) => {

      const favoriteId = req.params.id;      
      const userId =  req.user._id; 

    try {     

      let favorite = await Favorites.findOneAndUpdate(
        {userId:userId},{$pull:{motoId:{$in:favoriteId},postId:{$in:favoriteId}}});

      if (!favorite) {
        res.status(404).json({ 'message': 'El elemento que intentas eliminar no existe' })
        return
      }

      res.status(204).json({ 'message': 'El elemento se ha eliminado correctamente' })

    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  });

module.exports = router