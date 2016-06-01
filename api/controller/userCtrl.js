var
  User = require('../models/User.js'),
  jwt = require('jsonwebtoken'),
  Single = require('../models/Single.js'),
  Social = require('../models/Social.js'),
  Mobile = require('../models/Mobile.js'),
  Ecommerce = require('../models/Ecommerce.js')

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
       console.log(process.env.secret.toString());
       if (err) {
    console.log('Error Inserting New Data');
    if (err.name == 'ValidationError') {
        for (field in err.errors) {
            console.log(err.errors[field].message);
        }
    }
}
  console.log(user);
       var token = jwt.sign(newUser.toObject(), process.env.secret.toString(), {
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
   },
   singlecreate: function(req,res){
     User.findOne({_id: req.params.id}, function(err, user){
       if(err) return console.log(err)
         var newSingle = new Single(req.body)
         newSingle._creator = User._id
         newSingle.save(function(err){
           if(err) return console.log(err)
           console.log(user);
           console.log(user.single, "single");
           user.single.push(newSingle)
           user.save(function(err,user){
             res.json(user)
           })
         })
     }
   )},
   socialcreate: function(req,res){
     User.findOne({_id: req.params.id}, function(err, user){
       if(err) return console.log(err)
         var newSocial = new Social(req.body)
         newSocial._creator = User._id
         newSocial.save(function(err){
           if(err) return console.log(err)
           console.log(user);
           console.log(user.social, "social");
           user.social.push(newSocial)
           user.save(function(err,user){
             res.json(user)
           })
         })
     }
   )},
   mobilecreate: function(req,res){
     User.findOne({_id: req.params.id}, function(err, user){
       if(err) return console.log(err)
         var newMobile = new Mobile(req.body)
         newMobile._creator = User._id
         newMobile.save(function(err){
           if(err) return console.log(err)
           console.log(user);
           console.log(user.mobile, "mobile");
           user.mobile.push(newMobile)
           user.save(function(err,user){
             res.json(user)
           })
         })
     }
   )},
   ecomcreate: function(req,res){
     User.findOne({_id: req.params.id}, function(err, user){
       if(err) return console.log(err)
         var newEcommerce = new Ecommerce(req.body)
         newEcommerce._creator = User._id
         newEcommerce.save(function(err){
           if(err) return console.log(err)
           console.log(user);
           console.log(user.ecommerce, "ecommerce");
           user.ecommerce.push(newEcommerce)
           user.save(function(err,user){
             res.json(user)
           })
         })
     }
   )}
}
