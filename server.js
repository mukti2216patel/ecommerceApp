const express = require('express');
const app = express();
const colors = require('colors');
app.get('/' , (req , res)=>{
    res.json("welcome");
})

const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`"server running on ${PORT}"`.bgCyan.white);
})