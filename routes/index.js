var store = require('../store');
var express = require('express');
var router = express.Router();

var setCookie = function(cookie){
  if (cookie===undefined) return 'Anonymous'
    else return cookie;
}

/* GET home page. */
router.get('/', function(req, res) {
  var tweets = store.list();
  var username = setCookie(req.cookies.username);
  res.render('index', {title: 'Twitter.js', tweets: tweets, username: username});
});


router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var tweets = store.find({name: name}); 
  var username = setCookie(req.cookies.username);
  res.render('index', {title: 'Twitter.js - Posts by '+name, tweets:tweets, username: username});
});

router.post('/submit', function(req, res, next) {
  var name = req.body.name;
  var text = req.body.text;
  if (req.body.hasOwnProperty('checkbox')){
    res.cookie('username', name);
  };
  io.sockets.emit('new_tweet',{
  	name: name,
  	text: text
  });
  store.push(name, text);
  res.redirect('/');

});

module.exports = router;

// post function for the sql database with model
/*
router.post('/submit', function(req,res, next){
  User.find ({
    where: {
      name: req.body.name
    }
  }).complete(function(err,user){
    //step 2
    if (!!user) {return next(); }
    //step 3 no user
    User.create({
      name:req.boday.name
    }).complete(function(err,user){
      req.user = userl;
      next();
    })
  })
  //step 4
  function(req, res, next){
    Tweer.crete({
      tweet: req.body.tweet,
      userId: //...
    }).complete(function(err,user){
      //step5
      res.redirect('/')
    })
  }
})
*/

// 1.look for user witht that name
// 2. if find that user, move to step 4
// 3. make user with name
// 4. 
// 5.












