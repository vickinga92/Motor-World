const mongoose = require('mongoose')
const express = require('express')
const { json } = require('express')
const router = express.Router()
const Post = require('../models/post')
const User = require('../models/users')
const mustAuth = require('../middlewares/mustAuth')


router.route('/publish')
  .get(mustAuth(), async (req, res) => {
    filters = { userId: req.user._id }
    let favoriteList = await Post.find(filters).exec()

    res.json(favoriteList)

  })

module.exports = router