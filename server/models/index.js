const mongoose = require('mongoose');
const DATABASE = process.env.DATABASE;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://' + DATABASE);
}

let conn = mongoose.connection;
conn.on('connected', function () {
  console.log('Database connected successfully.');
});
conn.on('disconnected', function () {
  console.log('Database disconnected successfully.');
});
conn.on('error', console.error.bind(console, 'connection error:'));

module.exports = conn;
