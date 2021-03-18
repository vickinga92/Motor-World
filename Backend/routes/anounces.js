const { Router } = require('express');

const { mustAuth } = require('../middlewares');

const  { obtenerAnuncios } = require('../controllers/anounces');

const router = Router();

router.get('/', mustAuth(), obtenerAnuncios); 

module.exports = router