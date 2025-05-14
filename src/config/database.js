const mongoose = require('mongoose');
const connectDB = async()=>{
  await mongoose.connect ("mongodb+srv://saryu:Saryu%40264@namastenode.xlozxuu.mongodb.net/devTinder")
}


module.exports =   connectDB ;
