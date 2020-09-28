const mongoose = require('mongoose')
const Schema = mongoose.Schema

let UsersSchema = new Schema({
  email: { type: String, required: false, unique: true },
  password: { type: String, required: false },
  profile: { type: String, required: false, default: 'user' },
  _id: { type: String, required: false },
  enabled: { type: Boolean, required: false },

});

module.exports = UsersSchema