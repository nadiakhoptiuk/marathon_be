const mongoose = require("mongoose");

async function connectToDB() {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.DB_HOST, {
      dbName: process.env.DB_NAME,
    });
    console.log("Database connection is successful");
  } catch (err) {
    console.log(`Database connection failed with error: ${err.message}`);
    process.exit(1);
  }
}

module.exports = { connectToDB };
