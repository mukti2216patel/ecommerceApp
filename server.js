const express = require("express");
const app = express();
const colors = require("colors");
const dotenv = require("dotenv");
const connectDb = require("./config/db");

dotenv.config();
connectDb();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("welcome");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`"server running on ${PORT}"`.bgCyan.white);
});
