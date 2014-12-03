var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var db = require('./db');
var router = require('./routes');
var fs = require('fs');
var request = require('request');


var app = express();
app.use(bodyParser.json());
app.use("/stories", router);

app.use(express.static(path.join(__dirname, '/../client')));

app.get('/stories', function (req, res) {
  res.sendfile(path.join(__dirname, '/../client/index.html'));
});


app.listen(3000);

db.connect();

// var util = require('./lib/utility');
// var partials = require('express-partials');
// var bcrypt = require('bcrypt-nodejs');


// var Users = require('./app/collections/users');
// var User = require('./app/models/user');
// var Links = require('./app/collections/links');
// var Link = require('./app/models/link');
// var Click = require('./app/models/click');


// var app = express();

// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
// app.use(partials());
// // Parse JSON (uniform resource locators)
// // Parse forms (signup/login)
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + '/public'));

// var session = require('express-session');
// var sess = {
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: {}
// }

// if (app.get('env') === 'production') {
//   app.set('trust proxy', 1) // trust first proxy
//   sess.cookie.secure = true // serve secure cookies
// }

// app.use(session(sess));

// //go to login if session expired, otherwise direct to index page
// app.get('/', util.checkUser,
// function(req, res, next) {
//     res.render('index');
// });

// app.get('/create', 
// function(req, res) {
//   res.render('index');
// });

// app.get('/links', 
// function(req, res) {
//   Links.reset().fetch().then(function(links) {
//     res.send(200, links.models);
//   });
// });

// app.post('/links', 
// function(req, res) {
//   var uri = req.body.url;

//   if (!util.isValidUrl(uri)) {
//     console.log('Not a valid url: ', uri);
//     return res.send(404);
//   }

//   new Link({ url: uri }).fetch().then(function(found) {
//     if (found) {
//       res.send(200, found.attributes);
//     } else {
//       util.getUrlTitle(uri, function(err, title) {
//         if (err) {
//           console.log('Error reading URL heading: ', err);
//           return res.send(404);
//         }

//         var link = new Link({
//           url: uri,
//           title: title,
//           base_url: req.headers.origin
//         });

//         link.save().then(function(newLink) {
//           Links.add(newLink);
//           res.send(200, newLink);
//         });
//       });
//     }
//   });
// });

// /************************************************************/
// // Write your authentication routes here
// /************************************************************/

// app.get('/logout', function(req, res) {
//   // req.session.destroy(function(){
//   //   res.redirect('/login');
//   // });
// console.log('logout');
// res.render('login');
// });

// app.get('/login', function(req, res){
//   res.render('login');
// });

// app.post('/login', function(req, res){
//   var username = req.body.username;
//   var password = req.body.password;
//   //check if user exists in DB
//   new User({username: username}).fetch().then(function(user){
//     if(!user){
//       return res.redirect('/login');
//     }
//     //check password
//     bcrypt.compare(password, user.get('password'), function(err, match){
//       if(match){
//         console.log('match');
//         util.createSession(req, res, user);
//       //  res.redirect('/index');
//       }else{
//         console.log('not match');
//         res.redirect('/login');
//       }
//     });
//   });
// });

// app.get('/signup', function(req, res){
//   res.render('signup');
// });

// app.post('/signup', function(req, res){
//   var username = req.body.username;
//   var password = req.body.password;
//   var user;

//   new User({username: username}).fetch().then(function(found){
//     if(found){
//       res.send(200, found.attributes);
//     }else{
//       bcrypt.genSalt(10, function(err, salt) {
//         bcrypt.hash(password, salt, null, function(err, hash) {
//           user = new User({
//             username: username,
//             password: hash,
//             salt: salt
//           });
//             // Store hash in your password DB.
//           user.save().then(function(newUser) {
//             Users.add(newUser);
//             res.send(200, newUser);
//           });
          
//         });
//       });
//     }
//   });
// });
// /************************************************************/
// // Handle the wildcard route last - if all other routes fail
// // assume the route is a short code and try and handle it here.
// // If the short-code doesn't exist, send the user to '/'
// /************************************************************/

// app.get('/*', function(req, res) {
//   new Link({ code: req.params[0] }).fetch().then(function(link) {
//     if (!link) {
//       res.redirect('/');
//     } else {
//       var click = new Click({
//         link_id: link.get('id')
//       });

//       click.save().then(function() {
//         db.knex('urls')
//           .where('code', '=', link.get('code'))
//           .update({
//             visits: link.get('visits') + 1,
//           }).then(function() {
//             return res.redirect(link.get('url'));
//           });
//       });
//     }
//   });
// });

// console.log('Shortly is listening on 4568');
// app.listen(4568);
