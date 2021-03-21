const { Favorites } = require('../models');

const obtenerFavoritos = async (req, res) => {
    
    filter = { userId: req.user._id }

    const favorites = await Favorites.find(filter)     
    .populate({ path: 'motoId', model: 'motos'})
    .populate({ path: 'postId', model: 'postModel'})
 
    res.json(favorites)

}

const obtenerFavorito = async (req, res) => {

    const favoriteId = req.params.id

    const favorite = await Favorites.findOne(favoriteId).exec()

    if (!favorite) {
      res.status(404).json({ 'message': 'El elemento que intentas obtener no existe' })
      return
    }

    res.json(foundItem)

}

const guardarFavorito = async (req, res) => {

    let params; 
    const favoriteId =  req.params.id;     
    const userId =  req.user._id;      
    const isMoto = req.body.isMoto;
  
  try {

    isMoto ? params = {$addToSet:{motoId:favoriteId}} : params = {$addToSet:{postId:favoriteId}}     
    
    const favorites = await Favorites.findOneAndUpdate({userId: userId},params,{new:true,upsert:true});
   
    res.json({favorites});

  } catch (e) {
    res.status(500).json({ error: e.message })
  }

}

const borrarFavorito = async (req, res) => {

    const favoriteId = req.params.id;      
    const userId =  req.user._id; 

  try {     

    const favorite = await Favorites.findOneAndUpdate(
      {userId:userId},{$pull:{motoId:{$in:favoriteId},postId:{$in:favoriteId}}});

    if (!favorite) {
      res.status(404).json({ 'message': 'El elemento que intentas eliminar no existe' })
      return
    }

    res.status(204).json({ 'message': 'El elemento se ha eliminado correctamente' })

  } catch (e) {
    res.status(500).json({ error: e.message })
  }
};

  module.exports = {
      obtenerFavoritos,
      obtenerFavorito,
      guardarFavorito,
      borrarFavorito
  }