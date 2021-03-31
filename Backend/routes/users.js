const { Router } = require('express');

const { mustAuth } = require('../middlewares');

const { crearUsuario,
        obtenerUsuarios,    
        editarUsuario, 
        borrarUsuario} = require('../controllers/users');

const router = Router();

router.post('/', crearUsuario);

router.get('/', mustAuth(), obtenerUsuarios);

router.put('/:id', mustAuth(), editarUsuario);

router.delete('/:id', mustAuth(), borrarUsuario);

module.exports = router
