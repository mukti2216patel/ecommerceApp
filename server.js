const express = require("express");
const app = express();
const cors = require('cors');
const colors = require("colors");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const authRoutes = require('./routes/authRoutes');
const JWT = require('jsonwebtoken');
dotenv.config();
connectDb();

app.use(express.json());
app.use(cors());


app.use('/api/v1/auth'  , authRoutes);

app.get("/", (req, res) => {
  res.json("welcome");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`"server running on ${PORT}"`.bgCyan.white);
});
