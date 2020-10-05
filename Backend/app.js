'use strict'

const express = require('express')
const bearerToken = require('express-bearer-token')
const cors = require('cors')
const database = require('./modules/database')
const firebase = require('firebase')
const config = require('./modules/config')


firebase.initializeApp(config.firebaseConfig);


const app = express()


app.use(bearerToken())
app.use(cors())
app.use(express.json())

//rutas
const routeAuth = require('./routes/auth')
const routeUsers = require('./routes/users')
const routePost = require('./routes/post')
const routeMotos = require('./routes/motos')


app.use(routeAuth)
app.use(routeUsers)
app.use(routePost)
app.use(routeMotos)



database.connect()


module.exports = app
