const express = require('express');
const app = express();
const port = 3000;

// app.arguments(express.json());

app.get('/' , (req , responce)=>{
    console.log('Get Request Successfully !')
    responce.send('Get Req Successfully initited');
})

app.get('/post' , (req , responce)=>{
    let username = 'dafraoui@gmail.com'; 
    let password = 'Mehdi2005';
    if (username === 'dafraouimehdi05@gmail.com' && password === 'Mehdi2005') {
        responce.send('Welcome to page home');
    }
    console.log('Get Request Successfully !');
});

app.get('/put' , (req , responce)=>{
    console.log('put Request Successfully !')
    responce.send('put Req Successfully initited');
})

app.get('/delete' , (req , responce)=>{
    console.log('delete Request Successfully !')
    responce.send('delete Req Successfully initited');
})

app.listen(port , ()=>{
    console.log(`server estabilished at ${port}`);
})