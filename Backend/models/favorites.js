const mongoose = require('mongoose')
const FavoritesSchema = require('./schemas/favorites')

let Favorites = mongoose.model('favorites', FavoritesSchema);

module.exports = Favorites