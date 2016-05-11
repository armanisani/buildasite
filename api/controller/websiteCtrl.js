var
  Website = require('../models/Website.js')


module.exports = {
  index: function(req,res){
    Website.find({}).exec(function(err, web){
      if(err) console.log(err);
      res.json(web)
    })
  },
  show: function(req,res){
    Website.findOne({_id: req.params.id}).exec(function(err, web){
      if(err) console.log(err);
      console.log(web);
      res.json(web)
    })
  },
  destroy: function(req,res){
    Website.findOne({_id: req.params.id}, function(err,web){
      if(err) throw err
      Website.remove({_id: req.params.id}, function(err){
        if(err) throw err
        res.json(web)
      })
    })
  },
  update: function(req,res){
    Website.findOne({_id: req.params.id}).exec(function(err, web){
      if(err) throw err
      web.title = req.body.title
      web.description = req.body.description
      web.additionalInfo = req.body.additionalInfo
    })
  },
  create: function(req, res) {
    var newWeb = new Website(req.body)
    newWeb.save(function(err,web){
      if(err) throw err
      res.json({message: 'user created and here is token', web: web})
    })
  }
}
