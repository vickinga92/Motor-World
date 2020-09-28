const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const config = require('../modules/config')
const firebase = require('firebase')
const User = require('../models/users')

async function checkEmailAndPassword(email, password) {
    try {
      let auth = await firebase.auth().signInWithEmailAndPassword(email, password);
      return auth;
    } catch (e) {
      res.status(401).json({ message: e.message });
    }
  }
  router.route('/auth/login')
    .post(async (req, res) => {
      let credentials = req.body
  
      try {
        let auth = await checkEmailAndPassword(credentials.email, credentials.password);
  
        let payload = {
          _id: auth.user.uid,
          email: credentials.email,
        };
  
        let token = jwt.sign(payload, config.jwtPassword);
  
        res.json({ token });
  
      } catch (e) {
        res.status(401).json({ message: e.message });
      }
    })
  
  router.route('/auth/forgotten-password')
    .post(async (req, res) => {
      let searchEmail = req.body.email
      let foundEmail = await User.findOne({ email: searchEmail })
  
      if (!foundEmail) {
        res.status(404).json({ 'message': 'No existe el email en nuestra base de datos' })
        return
      }
      try {
        let auth = await firebase.auth().sendPasswordResetEmail(searchEmail);
        res.json({ 'message': 'Te hemos enviado un email desde el que podrás modificar tu contraseña de forma segura' })
  
      } catch (e) {
        res.status(401).json({ message: e.message });
      }
    })
  
  
  module.exports = router
  