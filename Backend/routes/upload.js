const { Router } = require('express');

const { mustAuth } = require('../middlewares');

const router = Router();

router.post('/upload', mustAuth(), upload.single('image'), async (req, res) => {
  
    fs.renameSync(req.file.path, req.file.path + '.' + req.file.mimetype.split('/')[1]);
    res.send('check imagen')
})

module.exports = router