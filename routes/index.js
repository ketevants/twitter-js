'use strict'
const express = require( 'express' );
const router = express.Router(); // creates an instance of an express application

const tweetBank = require('../tweetBank');

router.get("/stylesheets", function(req, res, next){
  res.send("css")
})

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});
//console.log(express.response.sendFile.toString())
module.exports = router;
