const Certificate = require('./models/schema');

const getCerts = async (req, res) => {
  try {
    const response = await Certificate.find({}, { __v: 0 });
    res.status(200);
    res.send(response);
  } catch (error) {
    console.log(error, 'error with getCerts');
    res.status(500).send({ error: 'error' });
  }
};

const postCert = async (req, res) => {
  try {
    const doc = new Certificate({
      ...req.body,
      picture: req.file.path,
    });
    const savedCert = await doc.save();
    res.status(201).send(savedCert);
  } catch (error) {
    console.log(error, 'error with postCert');
    res.status(500).send({ error: 'error' });
  }
};

const getPicture = async (req, res) => {
  try {
    const url = '/' + req.body.url;
    res.sendFile(url, { root: __dirname });
  } catch (error) {
    console.log(error, 'error with getPicture');
    res.status(500).send({ error: 'error' });
  }
};

module.exports = { getCerts, postCert, getPicture };
