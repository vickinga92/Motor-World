const mongoose = require('mongoose')
const FavoritesSchema = require('./schemas/favorites')

// FavoritesSchema.methods.toJSON = function() {
//     const { _id, userId, ...motoId, __v } = this.toObject();
//     return motoId;
//   }

let Favorites = mongoose.model('Favorites', FavoritesSchema);

module.exports = Favorites