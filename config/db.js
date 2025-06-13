const colors = require("colors");
const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.URL);
    console.log("DB connected".bgGreen.white);
  } catch (err) {
    console.log(`Error in MongoDB: ${err.message}`.bgRed.white);
    process.exit(1); // optional: stop app on DB error
  }
};

module.exports = connectDb;
