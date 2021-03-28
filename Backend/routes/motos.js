const { Router } = require('express');

const { mustAuth } = require('../middlewares');

const { 
  obtenerMotos,
  obtenerMotosConFiltros,
  obtenerMoto,
  crearMoto,
  editarMoto,
  borrarMoto,
  obtenerImagenMoto } = require('../controllers/motos');

const router = Router();

router.get('/', obtenerMotos);

router.get('/filters', obtenerMotosConFiltros); 
    
router.get('/:id', obtenerMoto); 

router.get('/img/:num/:id', obtenerImagenMoto)

router.post('/', mustAuth(), crearMoto);

router.put('/:id', mustAuth(), editarMoto);

router.delete('/:id', mustAuth(), borrarMoto);

module.exports = router