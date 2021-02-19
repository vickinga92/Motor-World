const mongoose = require('mongoose')
const Schema = mongoose.Schema


let FavoritesSchema = new Schema({
    
    userId:{type:String, required: true, unique:true},
    motoId:[{type:Schema.Types.ObjectId, ref:'Motos'}],    
    postId:[{type:Schema.Types.ObjectId, ref:'PostModel'}]
       

});


module.exports = FavoritesSchema