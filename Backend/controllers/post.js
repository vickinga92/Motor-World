const Post = require('../models/post');

const obtenerPost = async (req, res) => {
    
    const postList = await Post.find().exec()

    res.json(postList)

}

const obtenerUnPost = async (req, res) => {

    const filter = {_id: req.params.id}

    let foundItem = await Post.findOne(filter).exec()

    if (!foundItem) {
      res.status(404).json({ 'message': 'El elemento que intentas obtener no existe' })
      return
    }

    res.json(foundItem)
}

const crearPost = async (req, res) => {

    const data = req.body

    try {

      const newPost = {
        userId: req.user._id,
        name: data.name,
        province: data.province,
        phone: data.phone,
        email: data.email,
        brand: data.brand,
        model: data.model,
        type: data.type,
        displacement: data.displacement,
        fuel: data.fuel,
        age: data.age,
        km: data.km,
        color: data.color,
        price: data.price,
        desc: data.desc,
        image: data.image
      }
    
      const postInMongo = await new Post(newPost).save()

      res.json(postInMongo);
     
    } catch (e) {
      res.status(500).json({ error: e.message })
      console.log(e)
    }
}

const editarPost = async (req, res)=>{
 
    const searchId = req.params.id
    const data = req.body
    
    try {

    const postEdited = {
      userId: req.user._id,
      name: data.name,
      province: data.province,
      phone: data.phone,
      email: data.email,
      brand: data.brand,
      model: data.model,
      type: data.type,
      displacement: data.displacement,
      fuel: data.fuel,
      age: data.age,
      km: data.km,
      color: data.color,
      price: data.price,
      desc: data.desc,
      image: data.image,
    }
    const editedInMongo = await Post.findOneAndUpdate({ _id: searchId }, {$set:postEdited }).exec()
    res.json(editedInMongo);

  } catch (e) {
    res.status(500).json({ error: e.message })
    console.log(e)
  }
}

const borrarPost = async (req, res) => {

    const searchId = req.params.id

    const foundItem = await Post.findOneAndDelete({ _id: searchId }).exec()

    if (!foundItem) {
      res.status(404).json({ 'message': 'El elemento que intentas eliminar no existe' })
      return
    }

    res.status(204).json({ 'message': 'El elemento se ha eliminado correctamente' })
}


module.exports = {
    obtenerPost,
    crearPost,
    obtenerUnPost,
    editarPost,
    borrarPost
}