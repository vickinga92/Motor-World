const mongoose = require('mongoose')
const express = require('express')
const { json } = require('express')
const router = express.Router()
const Post = require('../models/post')
const User = require('../models/users')
const mustAuth = require('../middlewares/mustAuth')

router.route('/upload')

  .post(mustAuth(), upload.single('image'), async (req, res) => {
    fs.renameSync(req.file.path, req.file.path + '.' + req.file.mimetype.split('/')[1]);
    res.send('check imagen')
  })




module.exports = router