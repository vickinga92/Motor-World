const mongoose = require('mongoose')
const PostSchema = require('./schemas/post')

let FavoritesModel = mongoose.model('favoritesPost', PostSchema);

module.exports = FavoritesModel