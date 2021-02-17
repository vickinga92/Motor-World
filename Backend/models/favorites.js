const mongoose = require('mongoose')
const FavoritesSchema = require('./schemas/favorites')

let Favorites = mongoose.model('Favorites', FavoritesSchema);

module.exports = Favorites