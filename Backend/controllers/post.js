const path = require('path');
const fs   = require('fs');

const Post = require('../models/post');
const { subirArchivos } = require('../modules/subir-archivos');

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

    try{
      var image = await subirArchivos(req.files, undefined);       
    }catch (e) {
      return res.status(400).json({ error: e.message });
    }

    const {...body} = req.body      
      const data = {    
        userId: req.user._id, 
        image,     
        ...body       
      }

    try{      
      
      const post = await new Post(data).save();
      res.json(post);
     
    } catch (e) {
      res.status(500).json({ error: "Error de servidor, consulta con el administrador"})
      console.log(e)
    }
}

const editarPost = async (req, res)=>{

    const id = req.params.id
    const {...body} = req.body
    
    const post = await Post.findById(id);

    for (let i = 0; i < post.image.length; i++){

      if ( post.image[i] ) {
        // Borrar la imagen del servidor
        const pathImagen = path.join( __dirname, '../uploads',  post.image[i] );
        if ( fs.existsSync( pathImagen ) ) {
            fs.unlinkSync( pathImagen );
        }
      }     
    }  
    
    try{     
      
      var image = await subirArchivos(req.files, undefined);  
    
    }catch (e) {  

      return res.status(400).json({ error: e.message });

    }   
  
    const data = {    
      userId: req.user._id, 
      image,     
      ...body       
    }
    
    try{      
      
      await post.updateOne(data);
      res.json(post);
     
    } catch (e) {
      res.status(500).json({ error: "Error de servidor, consulta con el administrador"})
      console.log(e)
    }
}

const borrarPost = async (req, res) => {

    const id = req.params.id

    const post = await Post.findById (id);

      for (let i = 0; i < post.image.length; i++){

        if ( post.image[i] ) {
          // Borrar la imagen del servidor
          const pathImagen = path.join( __dirname, '../uploads',  post.image[i] );
          if ( fs.existsSync( pathImagen ) ) {
              fs.unlinkSync( pathImagen );
          }
        }

      }    

    await post.deleteOne();

    if (!post) {
      res.status(404).json({ 'message': 'El elemento que intentas eliminar no existe' })
      return
    }

    res.status(204).json({ 'message': 'El elemento se ha eliminado correctamente' })
}

const obtenerImagenPost = async(req, res) => {

  const {num, id }= req.params;
  
  let images = [];

  const post = await Post.findById(id);
  if ( !post ) {
      return res.status(400).json({
          error: `No existe un post con el id ${ id }`
      });
  }

  image = post.image[num];  
  
  if ( image ) {
      
      const pathImagen = path.join( __dirname, '../uploads', image );
      if ( fs.existsSync( pathImagen ) ) {
          return res.sendFile( pathImagen )
      }
  }

  const pathImagen = path.join( __dirname, '../assets/no-image.jpg');
  res.sendFile( pathImagen );
}


module.exports = {
    obtenerPost,
    crearPost,
    obtenerUnPost,
    editarPost,
    borrarPost,
    obtenerImagenPost
}