const { Schema, model } = require('mongoose');

const PostSchema = Schema({
    
    userId: { type: String, required: false },
    name: {type:String, required: false},
    province: {type:String, required: false},
    phone: {type:Number, required: false},
    email: {type:String, required: false},
    brand: {type:String, required: false},
    model: {type:String, required: false},
    type: {type:String, required: false},
    displacement: {type:Number, required: false},
    fuel: {type:String, required: false},
    age: {type:String, required: false},
    km: {type:String, required: false},
    color: {type:String, required: false},
    price: {type:Number, required: false},
    desc: {type:String, required: false},
    image: [{ type: String}],
    
});

module.exports = model('postModel', PostSchema);