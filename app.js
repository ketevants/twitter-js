const express = require( 'express' );
const app = express(); // creates an instance of an express application

var server = app.listen('3000', function(){
  console.log("Server listening")
})

app.get('/', function(req,res, next){
  res.send("Welcome!!")
})
