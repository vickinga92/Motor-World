const User = require('../models/users')
const firebase = require('firebase')

async function createUserFirebase(email, password) {
    const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
    return response
}

const crearUsuario = async (req, res) => {

    const data = req.body

    try {
        const newUser = await createUserFirebase(data.email, data.password)
        const userInfo = {
            email: data.email,
            _id: newUser.user.uid
        }
        const newUserInMongo = await new User(userInfo).save();

        res.json(newUserInMongo)

    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}

module.exports = {
    crearUsuario
}