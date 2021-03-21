const jwt = require('jsonwebtoken');
const firebase = require('firebase');
const config = require('../modules/config');

const User = require('../models/users');


async function checkEmailAndPassword (email, password) {   
    try {
      const auth = await firebase.auth().signInWithEmailAndPassword(email, password);
      return auth;
    } catch (e) {
      res.status(401).json({ message: e.message });
    }
}

const loginUsuario = async (req, res) => {
    
    const credentials = req.body

    try {
      
      const auth = await checkEmailAndPassword(credentials.email, credentials.password);

      const payload = {
        _id: auth.user.uid,
        email: credentials.email,
      };

      const token = jwt.sign(payload, config.jwtPassword);

      res.json({ token });

    } catch (e) {
      res.status(401).json({ message: "e.message" });
    }
};

const recuperarPassword = async (req, res) => {

    const searchEmail = req.body.email
    const foundEmail = await User.findOne({ email: searchEmail })

    if (!foundEmail) {
      res.status(404).json({ 'message': 'No existe el email en nuestra base de datos' })
      return
    }
    try {
      const auth = await firebase.auth().sendPasswordResetEmail(searchEmail);
      res.json({ 'message': 'Te hemos enviado un email desde el que podrás modificar tu contraseña de forma segura' })

    } catch (e) {
      res.status(401).json({ message: e.message });
    }
  }

module.exports = {
    loginUsuario,
    recuperarPassword
}