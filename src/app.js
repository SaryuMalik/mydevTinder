const express = require('express') ;
const app = express() ;
const {adminauth} = require("./middlewares/auth")

app.use('/admin' , adminauth) ;

app.get('/userentry' , (req , res) =>{
  res.send("Data successfully entered by the user") ;
})
app.get('/admin/getdata' , (req , res) =>{
  res.send("Data fetched successfully") ;
})

app.get('admin/deletedata' , (req , res) =>{  
  res.send("Data deleted successfully") ;
})

app.listen(5000 , ()=>{
  console.log("Server is running on port 5000") ;
})