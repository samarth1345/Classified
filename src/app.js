const express = require('express');
const path = require('path');
const app = express();
let alert = require('alert'); 

// const db = require('./src/db/conn')
const db = require('./db/conn');
const { rmSync } = require('fs');
const { jsonp } = require('express/lib/response');
const port = process.env.PORT || 5050;


app.use(express.static('./public'));
// app.use('view engine','hbs');
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
  // res.render('index');
  console.log(__dirname)
})
let user = 'Sid';
let pass = 'xxxx'
app.post('/login',(req,res)=>{
  const pth = path.join(__dirname,"../public/login.html");
  const k = req.body;
  console.log(req.body);
  if(k.name ===user && k.password ===pass){
    res.status(200).sendFile(pth);
  }else{
    const pth = path.join(__dirname,"../public/index.html");
    alert("Fuck of mf");
    res.status(300).sendFile(pth);
    
  }
})

app.listen(port,()=>{
  console.log(__dirname);
  console.log('Server is listening to 5050');
})