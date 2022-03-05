const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/makethon',
).then(()=>{
  console.log("Conenction is succesfull");
}).catch(e=>{
  console.log(e);
})

