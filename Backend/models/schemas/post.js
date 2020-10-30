const mongoose = require('mongoose')
const Schema = mongoose.Schema

let PostSchema = new Schema({
    userId: { type: String, required: false },
    name: {type:String, required: false},
    province: {type:String, required: false},
    phone: {type:Number, required: false},
    email: {type:String, required: false},
    brand: {type:String, required: false},
    fuel: {type:String, required: false},
    age: {type:String, required: false},
    km: {type:String, required: false},
    color: {type:String, required: false},
    price: {type:Number, required: false},
    desc: {type:String, required: false},
    image:{type:String, required:false},
    
});

module.exports = PostSchema