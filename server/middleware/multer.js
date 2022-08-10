const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './certImages');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Math.round(Math.random() * 1e9) + file.originalname;
    cb(null, uniqueSuffix);
  },
});

const fileFilter = (req, file, cb) => {
  file.mimetype === 'image/png' || file.mimetype === 'image/jpeg'
    ? cb(null, true)
    : cb(null, false);
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: fileFilter,
});

module.exports = upload;
