var store = require('../store');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var tweets = store.list();
  res.render('index', { title: 'LeTwitter.js', tweets: tweets});
});


router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var tweets = store.find({name: name});

  // console.log(store.list());
  	 
  res.render('index', { title: 'Twitter.js - Posts by '+name, tweets:tweets });
});

router.post('/submit', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  io.sockets.emit('new_tweet',{
  	name: name,
  	text: text
  });
  store.push(name, text);
  // res.redirect('/');
});

module.exports = router;
