const mongoose = require('mongoose')
const Schema = mongoose.Schema


let FavoritesSchema = new Schema({
    
    userId: {type:String, required: true},
    motoId: {type:Schema.Types.ObjectId, ref:'Motos', unique:true}
    
});



module.exports = FavoritesSchema