const express = require('express');
const path = require('path');
const app = express();
// const db = require('./src/db/conn')
const db = require('./db/conn')
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
    alert('Mf Fuck off!!');
  }
})

app.listen(port,()=>{
  console.log(__dirname);
  console.log('Server is listening to 5050');
})