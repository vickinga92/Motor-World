const { Router } = require('express');

const { 
  obtenerMotos,
  obtenerMotosConFiltros,
  obtenerMoto } = require('../controllers/motos');

const router = Router();

router.get('/', obtenerMotos);

router.get('/filters', obtenerMotosConFiltros); 
    
router.get('/:id', obtenerMoto); 

module.exports = router