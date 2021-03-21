const { Router } = require('express');

const { obtenerMotoPorMarca } = require('../controllers/brand');

const router = Router();

router.get('/:brand', obtenerMotoPorMarca); 

module.exports = router
