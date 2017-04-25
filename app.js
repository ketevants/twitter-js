const express = require( 'express' );
const app = express(); // creates an instance of an express application

var server = app.listen('3000', function(){
  console.log("Server listening")
})

app.use(function(req,res, next){
  console.log(req.method +" "+req.url)
  next();
});
app.use('/special/*',function(req,res, next){
  console.log("you reached the special area");
});


app.get('/', function(req,res, next){
console.log("pr!!!");
  res.send("<h1>bla!!</h1>")


});

app.get('/special', function(req,res, next){
  console.log("special");
  next();


});

app.get('/news', function(req,res, next){
     res.send("Welcome to news!!!")
});


