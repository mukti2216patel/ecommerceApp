const mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.URL, () => {
      console.log("db connected".bgGreen.white);
    });
  } catch (err) {
    console.log(`Error in Mongodb ${error}`.bgRed.white);
  }
};
export default connectDb;