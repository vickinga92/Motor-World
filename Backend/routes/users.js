const { Router } = require('express');

const { crearUsuario } = require('../controllers/users');

const router = Router();

router.post('/', crearUsuario);

module.exports = router
