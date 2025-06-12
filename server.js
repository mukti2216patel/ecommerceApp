const express = require('express');
const app = express();
const colors = require('colors');
const dotenv = require('dotenv');
app.get('/' , (req , res)=>{
    res.json("welcome");
})

const PORT = process.env.PORT;
app.listen(PORT , ()=>{
    console.log(`"server running on ${PORT}"`.bgCyan.white);
})