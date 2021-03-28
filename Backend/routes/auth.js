const { Router } = require('express');

const  { loginUsuario,
         loginAdmin,
         recuperarPassword } = require('../controllers/auth');

const router = Router();

router.post('/login', loginUsuario);

router.post('/admin', loginAdmin);

router.post('/forgotten-password', recuperarPassword); 

module.exports = router
  