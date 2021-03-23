const { Schema, model } = require('mongoose');

const FavoritesSchema = Schema({
    
    userId:{type:String, required: true, unique:true},
    motoId:[{type:Schema.Types.ObjectId, ref:'motos'}],    
    postId:[{type:Schema.Types.ObjectId, ref:'postModel'}]
       
});

module.exports = model('favorites', FavoritesSchema);