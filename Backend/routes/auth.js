const { Router } = require('express');

const  { loginUsuario,
         recuperarPassword } = require('../controllers/auth');

const router = Router();

router.post('/login', loginUsuario);

router.post('/forgotten-password', recuperarPassword); 

module.exports = router
  