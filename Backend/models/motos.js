const mongoose = require('mongoose')
const MotosSchema = require('./schemas/motos')

let Motos = mongoose.model('motos', MotosSchema);

module.exports = Motos