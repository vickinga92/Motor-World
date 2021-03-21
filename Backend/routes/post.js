const { Router } = require('express');

const { mustAuth } = require('../middlewares');

const multer = require('multer');
const upload = multer ({dest: 'public/images'})

const { obtenerPost,
        obtenerUnPost,
        crearPost,
        editarPost,
        borrarPost } = require('../controllers/post');

const router = Router();

router.route('/', upload.single('uploaded_file'))
      .get(obtenerPost)
      .post(mustAuth(), crearPost);

router.route('/:id')
      .get(mustAuth(), obtenerUnPost)
      .put(mustAuth(), editarPost)
      .delete(mustAuth(), borrarPost); 

module.exports = router