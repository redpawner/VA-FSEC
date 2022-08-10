const { getCerts, postCert, getPicture } = require('./controllers');
const upload = require('./middleware/multer');

const router = require('express').Router();
router.get('/', getCerts);
router.post('/upload', upload.single('certImages'), postCert);
router.post('/getPicture', getPicture);

module.exports = router;
