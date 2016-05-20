var
  User = require('../models/User.js'),
  jwt = require('jsonwebtoken')

module.exports = {
  index: function(req,res){
    User.find({}). exec(function(err,users){
      if(err) console.log(err);
      res.json(users)
    })
  },
  show: function(req,res){
    User.findOne({_id: req.params.id}).exec(function(err,user){
      if(err) console.log(err);
      console.log(user);
      res.json(user)
    })
  },
  destroy: function(req,res){
    User.findOne({_id: req.params.id}, function(err,user){
      if(err) throw err
      User.remove({_id: req.params.id}, function(err){
        if(err) throw err
        res.json(user)
      })
    })
  },
  update: function(req,res){
    User.findOne({_id: req.params.id}).exec(function(err, user){
      if(err) throw err
      user.first = req.body.first
      user.last = req.body.last
      user.username = req.body.username
      user.email = req.body.email
      user.phone = req.body.phone
      user.descrioption = req.body.description
      user.livingStatus = req.body.livingStatus
      user.contactMethod = req.body.contactMethod
      user.twitter = req.body.twitter
      user.linkedin = req.body.linkedin
      user.google = req.body.google
      user.youtube = req.body.youtube
      user.currentSite = req.body.currentSit
      user.save(function(err,saved_user){
        if(err) throw err
        res.json(saved_user)
      })
      res.json(user)
    })
  },
   create: function(req, res){
     var newUser = new User(req.body)
     newUser.password = newUser.generateHash(req.body.password)
     newUser.save(function(err, user){
       if(err) throw err
       var token = jwt.sign(user.toObject(), process.env.secret.toString(), {
         expiresIn: 6000
       })
       res.json({message: 'user created and here is token', user:user})
     })
   },
   authenticate: function(req,res){
     console.log("authenticate");
     User.findOne({username: req.body.username}).exec(function(err,user){
       if(err) throw err
       if(!user) return res.json({sucess: false, message: "No user found with that username"})
       console.log(!user.validPassword(req.body.password))
       if(user && !user.validPassword(req.body.password)) return res.json({success: false, message: "wrong password"})
       var token = jwt.sign(user.toObject(), process.env.secret.toString(), {
         expiresIn: 24000
       })
       console.log("here is your token" + token);
       res.json({sucess: true, message: "password correct. here is your token!", token: token, user: user})
     })
   },
   protect: function(req, res, next) {
     var token = req.body.token || req.query.token || req.headers['x-access-token']
     if(token) {
       jwt.verify(token, process.env.secret, function(err, decoded){
         if(err) return res.json({success: false, message: "wrong token information"})
         req.decoded = decoded
         next()
       })
     } else {
       return res.status(403).json({
         sucess: false,
         message: "no token was provided"
       })
     }
   }
}
