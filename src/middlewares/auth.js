const adminauth = (req , res , next)=>{
  const token = "xyz" ;
  const isadminAuthorized = token === "xyz" ;
  if (!isadminAuthorized)
  {
    res.status(401).send("Unauthorized access") ;
  }

  else  
  {
    next() ;
  }
}


module.exports = {adminauth} ;