const { Post } = require('../models');

const obtenerAnuncios = async (req, res) => {
    
    filters = { userId: req.user._id };
    const anounces = await Post.find(filters).exec()

    res.json(anounces)

}

module.exports = {
    obtenerAnuncios
};