const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3032, ()=>{
    console.log('La estás rompiendo amiga');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});