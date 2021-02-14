const mongoose = require('mongoose')
const Schema = mongoose.Schema

let FavoritesSchema = new Schema({
    
    id: {type:String, required: false},
    title: {type:String, required: false},
    desc: {type:String, required: false},
    brand: {type:String, required: false},
    type: {type:String, required: false},
    model: {type:String, required: false},
    price: {type:Number, required: false},
    motor: {type:String, required: false},
    cycle: {type:String, required: false},
    cylinders: {type:String, required: false},
    valves: {type:Number, required: false},
    distribution: {type:String, required: false},
    displacement:{type:Number, required:false},
    diameter:{type:String, required:false},
    maximum_power:{type:String, required:false},
    par:{type:String, required:false},
    feeding:{type:String, required:false},
    refrigeration:{type:String, required:false},
    start:{type:String, required:false},
    //transmisión
    clutch:{type:String, required:false},
    gearshift:{type:String, required:false},
   //dimensiones
    distance_axis:{type:String, required:false},
    seat_heigth:{type:String, required:false},
    deposit:{type:String, required:false},
    weight:{type:String, required:false},
    homologation:{type:String, required:false},
    //parte ciclo
    chasis:{type:String, required:false},
    front_suspension:{type:String, required:false},
    rear_suspension:{type:String, required:false},
    front_brake:{type:String, required:false},
    back_brake:{type:String, required:false},
    front_tire:{type:String, required:false},
    rear_tire:{type:String, required:false},
    tires:{type:String, required:false},

});

module.exports = FavoritesSchema