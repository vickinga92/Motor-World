const { Router } = require('express');

const { mustAuth } = require('../middlewares');

const  {
  obtenerFavoritos,
  obtenerFavorito,
  guardarFavorito,
  borrarFavorito } = require('../controllers/favorites');

const router = Router();

router.get('/', mustAuth(), obtenerFavoritos);

router.get('/:id', mustAuth(), obtenerFavorito); 

router.put('/:id', mustAuth(), guardarFavorito); 
  
router.delete('/:id', mustAuth(), borrarFavorito);

module.exports = router