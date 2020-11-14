const mongoose = require('mongoose')
const express = require('express')
const { json } = require('express')
const router = express.Router()
const Post = require('../models/post')
const User = require('../models/users')
const mustAuth = require('../middlewares/mustAuth')


router.route('/favorites')
  .get(mustAuth(), async (req, res) => {
    filters = { userId: req.user._id }
    let favoriteList = await Post.find(filters).exec()

    res.json(favoriteList)

  })
  .post(mustAuth(), async (req, res) => {
    let data = req.body
    try {
      let newFavorite = {
        userId: req.user._id,
        location_id: data.location_id,
        photo: data.photo,
        name: data.name,
        subcategory_type: data.subcategory_type,
        hotel_class: data.hotel_class,
        location_string: data.location_string,
        num_reviews: data.num_reviews,
        helpful_votes: data.helpful_votes,
        price: data.price
      }

      let favoriteInMongo = await new Post(newFavorite).save()

      res.json(favoriteInMongo);

    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  })

router.route('/favorites/filterDesc')
  .get(mustAuth(), async (req, res) => {

    filters = { userId: req.user._id }
    filterPriceDesc = { price: -1 }
    let priceDesc = await Post.find(filters).sort(filterPriceDesc).exec()

    res.json(priceDesc)
  })
router.route('/favorites/filterAsc')
  .get(mustAuth(), async (req, res) => {
    filters = { userId: req.user._id }
    let filterPriceAsc = { price: 1 }
    let priceAsc = await Post.find(filters).sort(filterPriceAsc).exec()

    res.json(priceAsc)
  })
router.route('/favorites/:id')
  .get(mustAuth(), async (req, res) => {

    let searchId = req.params.id

    let foundItem = await Post.findOne(searchId).exec()

    if (!foundItem) {
      res.status(404).json({ 'message': 'El elemento que intentas obtener no existe' })
      return
    }

    res.json(foundItem)
  })
  .delete(mustAuth(), async (req, res) => {

    let searchId = req.params.id


    let foundItem = await Post.findOneAndDelete({ _id: searchId }).exec()

    if (!foundItem) {
      res.status(404).json({ 'message': 'El elemento que intentas eliminar no existe' })
      return
    }

    res.status(204).json({ 'message': 'El elemento se ha eliminado correctamente' })
  });


module.exports = router