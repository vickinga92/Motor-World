'use strict'

const express = require('express')
const bearerToken = require('express-bearer-token')
const cors = require('cors')
const database = require('./modules/database')
const firebase = require('firebase')
const config = require('./modules/config')

//configuración multer (subida de archivos)
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
const multer  = require('multer')
//

firebase.initializeApp(config.firebaseConfig);


const app = express()


app.use(bearerToken())
app.use(cors())
app.use(express.json())
//uso de multer
app.use(bodyParser.urlencoded({extended: true}))
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'images')
    },
    filename:function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now( + path.extname(file.originalname)))
    }
})

var images = multer({
    storage: storage,
})
   

app.use(multer({
    dest: path.join(__dirname, 'public/images')
}).single('image'))
//

const routeAuth = require('./routes/auth')
const routeUsers = require('./routes/users')
const routePost = require('./routes/post')


app.use(routeAuth)
app.use(routeUsers)
app.use(routePost)


database.connect()


module.exports = app
