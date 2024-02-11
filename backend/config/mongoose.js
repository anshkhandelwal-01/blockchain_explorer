const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost/Blockchain_Explorer');
  console.log("Successfully connected to database.")
}

const db = mongoose.connection;

module.exports = db;