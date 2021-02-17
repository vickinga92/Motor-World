const mongoose = require('mongoose')
const Schema = mongoose.Schema


let FavoritesSchema = new Schema({
    
    userId:{type:String, required: true},
    motoId:[{type:Schema.Types.ObjectId, ref:'Motos', unique: true}],    
    postId:[{type:Schema.Types.ObjectId, ref:'PostModel', unique: true}]
    
    
});


module.exports = FavoritesSchema