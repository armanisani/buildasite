var
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  path = require('path'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  session = require('express-session'),
  passport = require('passport'),
  bcrypt = require('bcrypt-nodejs'),
  config = require('./api/config/config'),
  jwt = require('jsonwebtoken'),
  userRoutes = require('./api/routes/users.js'),
  socialRoutes = require('./api/routes/socials.js'),
  singleRoutes = require('./api/routes/singles.js'),
  mobileRoutes = require('./api/routes/mobiles.js'),
  ecommerceRoutes = require('./api/routes/ecommerces.js'),
  dotenv = require('dotenv').config({path: '.env'})

  var secret = process.env.secret || config.development.secret
console.log(process.env.secret);
// middeware
app.use(logger('dev'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, './public')))
app.use(bodyParser.json())
app.use(session({ secret: secret}))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static('./public'))

app.use(function (req,res,next){
  res.header('Cache-Control', 'no-cache, no-store, must-revalidate')
  res.header('Pragma', 'no-cache')
  res.header('Expires', 10000)
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'Options') {
    res.send(200)
  } else {
    return next()
  }
})
app.set('superSecret', process.env.secret)

app.use('/', userRoutes)
app.use('/social', socialRoutes)
app.use('/single', singleRoutes)
app.use('/mobile', mobileRoutes)
app.use('/ecommerce', ecommerceRoutes)
app.get('/', function(req,res){
  res.sendFile(__dirname, './index.html')
})
app.get('/profile', function(req,res){
  res.sendFile(path.join(__dirname, './public', 'profile.html'))
})


// Redirect Links

var port = process.env.PORT || config.development.port

var dbURL = process.env.MONGOLAB_URI || config.development.db

require('./api/config/mongoose')(config,dbURL);


app.listen(port);
console.log("Listening on port" + port + '...');
