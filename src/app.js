const express = require('express') ;
const app = express() ;
// app.get('/' , (req , res) =>{
//   res.send("Hello from the server !")
// })
// app.get('/home' ,(req , res) =>{
//   res.send("Hello from the Home !")
// })
app.get('/about' ,(req , res) =>{
  res.send({firstName : "Saryu" , lastName : "Malik"})
})

app.post('/about' , (req , res) =>{
  res.send("Data has been posted successfully") ;
})

app.delete('/about' , (req , res)=> {
  res.send("Data has been deleted successfully") ; 
})
app.listen(5000 , () =>{
 console.log("Server is running on port 5000...")
})