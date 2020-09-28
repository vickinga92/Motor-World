const mongoose = require('mongoose')
const express = require('express')
const { json } = require('express')
const router = express.Router()
const Post = require('../models/post')
const User = require('../models/users')
const mustAuth = require('../middlewares/mustAuth')


router.route('/post')
  .get(async (req, res) => {
    
    let PostList = await Post.find().exec()

    res.json(PostList)

  })

  .post(mustAuth(), async (req, res) => {
    let data = req.body
  
    try {
      let newPost = {
        userId: req.user._id,
        name: data.name,
        province: data.province,
        phone: data.phone,
        email: data.email,
        brand: data.brand,
        fuel: data.fuel,
        age: data.age,
        km: data.km,
        color: data.color,
        price: data.price,
        desc: data.desc,
        image: data.image,
      }

      let postInMongo = await new Post(newPost).save()

      res.json(postInMongo);

    } catch (e) {
      res.status(500).json({ error: e.message })
      console.log(e)
    }
  })
  router.route('/post/:id')
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