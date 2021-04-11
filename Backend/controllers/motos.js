const path = require('path');
const fs   = require('fs');

const { Motos } = require('../models');
const { subirArchivos } = require('../modules/subir-archivos');

const obtenerMotos = async (req, res) => {

    const motosList = await Motos.find().exec()

    res.json(motosList)

}

const obtenerMotosConFiltros = async (req, res)=> {

    const { brand = null, 
            priceA = null, 
            priceB = null, 
            type = null, 
            displacementA = null, 
            displacementB = null } = req.query;     

    const queryObj = {
      brand,
      price: { $gte: priceA, $lte: priceB}, 
      type,
      displacement: {$gte: displacementA, $lte: displacementB}
    };   
    
   
    if (queryObj['brand'] === null) delete queryObj['brand'];
    if (queryObj['type'] === null) delete queryObj['type'];

    if (queryObj.price.$gte === null && queryObj.price.$lte === null){
      delete queryObj['price'];
    }else if (queryObj.price.$gte === null){
      delete queryObj.price.$gte;
    }else if (queryObj.price.$lte === null){
      delete queryObj.price.$lte;
    }

    if (queryObj.displacement.$gte === null && queryObj.displacement.$lte === null){
      delete queryObj['displacement'];
    }else if (queryObj.displacement.$gte === null){
      delete queryObj.displacement.$gte;
    }else if (queryObj.displacement.$lte === null){
      delete queryObj.displacement.$lte;
    }    

    let filters = await Motos.find(queryObj).exec()

   
    if (!filters) {
      res.status(404).json({ 'message': 'El elemento que intentas obtener no existe' })
      return
    }
   
    res.json(filters)

}

const obtenerMoto = async (req, res) => {

    let searchMoto = req.params.id

    let foundMoto = await Motos.find({ id: searchMoto }).exec()

    if (!foundMoto) {
      res.status(404).json({ 'message': 'El elemento que intentas obtener no existe' })
      return
    }

    res.json(foundMoto)

}

const crearMoto = async (req, res) => {    

  try{
    var image = await subirArchivos(req.files, undefined);       
  }catch (e) {
    return res.status(400).json({status:400, error: e.message });
  }

  const {...body} = req.body        

    const data = {         
      image,     
      ...body       
    }

  try{      
    
    const moto = await new Motos(data).save();

    res.status(200).json({status:200, mensaje: "La moto ha sido creada", moto});
   
  } catch (e) {
    res.status(400).json({status:400, error: "Error de servidor, consulta con el administrador"})
    console.log(e)
  }
}

const editarMoto = async (req, res)=>{

  const id = req.params.id
  const {...body} = req.body
  
  const moto = await Motos.findById({_id: id});

  for (let i = 0; i < moto.image.length; i++){

    if ( moto.image[i] ) {
      // Borrar la imagen del servidor
      const pathImagen = path.join( __dirname, '../uploads',  moto.image[i] );
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
    image,     
    ...body       
  }
  
  try{      
    
    await moto.updateOne(data);
    res.status(200).json({status:200, mensaje: "La moto ha sido editada", moto});
   
  } catch (e) {
    res.status(400).json({status:400, error: "Error de servidor, consulta con el administrador"})
    console.log(e)
  }
}

const borrarMoto = async (req, res) => {

  const id = req.params.id

  const moto = await Motos.findById ({_id: id});

    for (let i = 0; i < moto.image.length; i++){

      if ( moto.image[i] ) {
        // Borrar la imagen del servidor
        const pathImagen = path.join( __dirname, '../uploads',  moto.image[i] );
        if ( fs.existsSync( pathImagen ) ) {
            fs.unlinkSync( pathImagen );
        }
      }

    }    

  await moto.deleteOne();
  

  if (!moto) {
    res.status(400).json({status:400, error: "El elemento que intentas eliminar, no existe"})
    return
  }

  res.status(200).json({status:200, mensaje: "La moto ha sido eliminada"})
}

const obtenerImagenMoto = async(req, res) => {

    const { num, id } = req.params;

    let image = [];

    const moto = await Motos.findById({_id: id});
    if ( !moto ) {
        return res.status(400).json({
            error: `No existe una moto con el id ${ id }`
        });
    }

    image = moto.image[num];  

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
    obtenerMotos,
    obtenerMotosConFiltros,
    obtenerMoto,
    crearMoto, 
    editarMoto, 
    borrarMoto,
    obtenerImagenMoto  
}
 