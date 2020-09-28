const express = require('express')
const router = express.Router()
const User = require('../models/users')
const firebase = require('firebase')

async function createUserFirebase(email, password) {
    let response = await firebase.auth().createUserWithEmailAndPassword(email, password)
    return response
}

router.route('/users')
    .post(async (req, res) => {
        let data = req.body

        try {
            let newUser = await createUserFirebase(data.email, data.password)
            let userInfo = {
                email: data.email,
                _id: newUser.user.uid
            }
            let newUserInMongo = await new User(userInfo).save();

            res.json(newUserInMongo)
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    })

module.exports = router
