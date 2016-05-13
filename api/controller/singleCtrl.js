var
  Single = require('../models/Single.js')

module.exports = {
  index: function(req,res){
    Single.find({}).exec(function(err,single){
      if(err) throw err
      res.json(single)
    })
  },
  show: function(req,res){
    Single.findOne({_id: req.params.id}).exec(function(err,single){
      if(err) throw err
      console.log(single);
      res.json(single)
    })
  },
  destroy: function(req,res){
    Single.findOne({_id: req.params.id}, function(err, single){
      if(err) throw err
      Single.remove({_id: req.params.id}, function(err){
        if(err) throw err
        res.json(single)
      })
    })
  },
  update: function(req,res){
    Single.findOne({_id: req.params.id}).exec(function(err,single){
      if(err) throw err
      single.title = req.body.title
      single.personal = req.body.personal
      single.business = req.body.business
      single.pages = req.body.pages
      single.color = req.body.color
      single.style = req.body.style
      single.description = req.body.description
      single.additionalInfo = req.body.additionalInfo
    })
  },
  create: function(req,res){
    var newSingle = new Single(req.body)
    newSingle.save(function(err,ecom){
      if(err) throw err
      res.json({message: "Single is created", single: single})
    })
  }
}
