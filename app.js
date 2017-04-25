
const express = require( 'express' );
const app = express();
const routes = require('./routes');
app.use('/', routes);
var nunjucks = require("nunjucks");




var server = app.listen('3000', function(){
  console.log("Server listening")
})
nunjucks.configure('views', { noCache: true });
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render);

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.get('/index', function(req, res, next){
  res.render( 'index',  {title: 'Hall of Fame', people: people, mood : "whatever"})
});

// app.use(function(req, res, next){
//   console.log(req.method +" "+req.url)
//   next();
// });
// app.use('/special/*',function(req, res, next){
//   console.log("you reached the special area");
// });


app.get('/', function(req, res, next){
console.log("pr!!!");
  res.send("<h1>bla!!</h1>")


});

// app.get('/special', function(req, res, next){
//   console.log("special");
//   next();


// });

// app.get('/news', function(req, res, next){
//      res.send("Welcome to news!!!")
// });










