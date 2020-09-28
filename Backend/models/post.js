const mongoose = require('mongoose')
const PostSchema = require('./schemas/post')

let PostModel = mongoose.model('postModel', PostSchema);

module.exports = PostModel