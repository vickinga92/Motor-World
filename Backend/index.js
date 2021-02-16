'use strict'

const expressApp = require('./app')

const port =  process.env.PORT ||  8083

expressApp.listen(port, () => console.info(`El servidor está corriendo en http://localhost:${port}`))