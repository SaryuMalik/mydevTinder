const express = require('express') ;
const app = express() ;
const connectDB = require('./config/database');
const {adminauth} = require("./middlewares/auth")
const  User = require('./models/user') ;

app.post('/signup' , async (req , res) =>{
  const user = new User ({
    firstName : "Aayush" ,
    lastName  : "Hans" ,
    emailId   :  "Hans@gmail.com" , 
    password : "Mummy@123"
  }) ; 

  await user.save() ; 
  res.send ("User created successfully") ; 
})



connectDB()
  .then(() => {
    console.log("Database Established successfully");
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected", err);
  });

