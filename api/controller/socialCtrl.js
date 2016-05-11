var
  Social = require('../models/Social.js')

module.exports = {
  index: function(req,res){
    Social.find({}).exec(function(err, social){
      if(err) throw err
      res.json(social)
    })
  },
  show: function(req,res){
    Social.findOne({_id: req.params.id}).exec(function(err, social){
      if(err) throw err
      console.log(social);
      res.json(social)
    })
  },
  destroy: function(req,res){
    Social.findOne({_id: req.params.id}, function(err, social){
      if(err) throw err
      Ecommerce.remove({_id: req.params.id}, function(err){
        if(err) throw err
        res.json(social)
      })
    })
  },
  update: function(req,res){
    Social.findOne({_id: req.params.id}).exec(function(err,social){
      if(err) throw err
      social.title = req.body.title
      social.color = req.body.color
      social.profile = req.body.profile
      social.description = req.body.description
      social.additionalInfo = req.body.additionalInfo
    })
  },
  create: function(req,res){
    var newSocial = new Social(req.body)
    newSocial.save(function(err,social){
      if(err) throw err
      res.json({message: 'Social Media is created', social: social})
    })
  }
}
