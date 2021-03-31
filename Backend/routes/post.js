const { Router } = require('express');

const { mustAuth } = require('../middlewares');

const { obtenerPost,
        obtenerUnPost,
        crearPost,
        editarPost,
        borrarPost,
        obtenerImagenPost } = require('../controllers/post');

const router = Router();


router.get('/', obtenerPost)

router.get('/:id',mustAuth(), obtenerUnPost)

router.get('/img/:num/:id', obtenerImagenPost)

router.post('/', mustAuth(), crearPost)

router.put('/:id', mustAuth(), editarPost)

router.delete('/:id', mustAuth(), borrarPost)

module.exports = router