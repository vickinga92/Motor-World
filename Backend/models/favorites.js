const { Schema, model } = require('mongoose');

const FavoritesSchema = Schema({
    
    userId:{type:String, required: true, unique:true},
    motoId:[{type:Schema.Types.ObjectId, ref:'Motos'}],    
    postId:[{type:Schema.Types.ObjectId, ref:'PostModel'}]
       
});

module.exports = model('favorites', FavoritesSchema);