const User = require('../models/users')
const firebase = require('firebase')

async function createUserFirebase(email, password) {
    const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
    return response
}

const crearUsuario = async (req, res) => {

    const { profile = "user", ...data} = req.body

    try {
        const newUser = await createUserFirebase(data.email, data.password)
        const userInfo = {
            email: data.email,
            _id: newUser.user.uid,
            profile
        }
        const usuario = await new User(userInfo).save();

        res.json({status: 200, mensaje: "El usuario ha sido creado con éxito", usuario})

    } catch (e) {
        res.status(400).json({status:400, error: e.message })
    }
}

const obtenerUsuarios = async(req, res) => {    
  
    const [ total, usuarios ] = await Promise.all([
        User.countDocuments(),
        User.find()           
    ]);

    res.json({
        total,
        usuarios
    });
}


const editarUsuario = async(req, res) => {

    const id = req.params.id    
    const { profile } = req.body
    try{      
      
      const user = await User.findByIdAndUpdate(id, {profile: profile});
      res.json({status: 200, mensaje: "El usuario ha sido modificado con éxito", user})

    } catch (e) {
        res.status(400).json({status:400, error: e.message })
    }

}

const borrarUsuario = async(req, res) => {

    const id = req.params.id    
    
    const total = await User.where({ profile: "admin"}).countDocuments();
             

    if(Number(total) == 1){

        return res.status(400).json({

            status:400,
            mensaje: "No se puede eliminar el único administrador que existe"

        })
    }		
    
    try{      
      
      const user = await User.findByIdAndRemove(id);
      res.json({status: 200, mensaje: "El usuario ha sido borrado con éxito", user})


    } catch (e) {
        res.status(400).json({status:400, error: e.message })
    }

}

module.exports = {
    crearUsuario,
    obtenerUsuarios,
    editarUsuario,
    borrarUsuario
}