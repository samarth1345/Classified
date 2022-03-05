const express = require('express');
const path = require('path');
const app = express();
const db = require('../MERN/src/db/conn')
const port = process.env.PORT || 5050;


app.use(express.static('./MERN/public'));
// app.use('view engine','hbs');

app.get('/',(req,res)=>{
  // res.render('index');
  console.log(__dirname)
})
app.get('/login',(req,res)=>{
  res.status(200).sendFile(path.join(__dirname,"./public/login.html"));
})

app.listen(port,()=>{
  console.log(__dirname);
  console.log('Server is listening to 5050');
})