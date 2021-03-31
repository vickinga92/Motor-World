const { Router } = require('express');

const { mustAuth } = require('../middlewares');

const { leerConfiguracion } = require('../controllers/configuration');

const router = Router();

router.get('/', mustAuth(), leerConfiguracion);

module.exports = router