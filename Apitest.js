const express = require('express');
const app = express();
const port = 3000;

app.arguments(express.json());

app.get('/' , (req , responce)=>{
    console.log('Get Request Successfully !')
    responce.send('Get Req Successfully initited');
})

app.listen(port , ()=>{
    console.log(`server estabilished at ${port}`);
})