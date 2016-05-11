var
  Mobile = require('../models/Mobile.js')


module.exports = {
  index: function(req,res){
    Mobile.find({}).exec(function(err, mobile){
      if(err) throw err
      res.json(mobile)
    })
  },
  show: function(req,res){
    Mobile.findOne({_id: req.params.id}).exec(function(err, mobile){
      if(err) throw err
      console.log(mobile);
      res.json(mobile)
    })
  },
  destroy: function(req,res){
    Mobile.findOne({_id: req.params.id}, function(err, mobile){
      if(err) throw err
      Mobile.remove({_id: req.params.id}, function(err){
        if(err) throw err
        res.json(mobile)
      })
    })
  },
  update: function(req,res){
    Mobile.findOne({_id: req.params.id}).exec(function(err,mobile){
      if(err) throw err
      mobile.title = req.body.title
      phoneType.title = req.body.title
      tabs.title = req.body.tabs
      type.title = req.body.type
      color.title = req.body.color
      description.title = req.body.description
      additionalInfo.title = req.body.additionalInfo
    })
  },
  create: function(req,res) {
    var newMobile = new Mobile(req.body)
    newMobile.save(function(err,ecom){
      if(err) throw err
      res.json({message: "Mobile site created", mobile:mobile})
    })
  }
}
