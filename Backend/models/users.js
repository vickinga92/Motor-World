const { Schema, model } = require('mongoose');

const UsersSchema = Schema({
    email: { type: String, required: false, unique: true },
    password: { type: String, required: false },
    profile: { type: String, required: false, default: 'user' },
    _id: { type: String, required: false },
    enabled: { type: Boolean, required: false },  
  });

module.exports = model('userModel', UsersSchema);