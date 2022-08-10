const mongoose = require('mongoose');
const { Schema } = mongoose;
const conn = require('./index');

const Certificate = new Schema({
  title: String,
  artist: String,
  year: Number,
  picture: String,
});

const Certificates = conn.model('Certificates', Certificate);

module.exports = Certificates;
