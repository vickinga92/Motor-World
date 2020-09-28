const mongoose = require('mongoose')
const UsersSchema = require('./schemas/users')

let UserModel = mongoose.model('userModel', UsersSchema);

module.exports = UserModel