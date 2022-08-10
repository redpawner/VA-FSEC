const {
  getCerts,
  postCert,
  getPicture,
  delCertificate,
} = require('./controllers');
const upload = require('./middleware/multer');

const router = require('express').Router();
router.get('/', getCerts);
router.post('/upload', upload.single('certImages'), postCert);
router.post('/getPicture', getPicture);
router.delete('/delCert', delCertificate);

module.exports = router;
