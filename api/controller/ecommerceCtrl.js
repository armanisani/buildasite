var
  Ecommerce = require('../models/Ecommerce.js')


module.exports = {
  index: function(req,res){
    Ecommerce.find({}).exec(function(err, ecom){
      if(err) console.log(err);
      res.json(ecom)
    })
  },
  show: function(req,res){
    Ecommerce.findOne({_id: req.params.id}).exec(function(err, ecom){
      if(err) console.log(err);
      console.log(ecom);
      res.json(ecom)
    })
  },
  destroy: function(req,res){
    Ecommerce.findOne({_id: req.params.id}, function(err, ecom){
      if(err) throw err
      Ecommerce.remove({_id: req.params.id}, function(err){
        if(err) throw err
        res.json(ecom)
      })
    })
  },
  update: function(req,res){
    Ecommerce.findOne({_id: req.params.id}).exec(function(err, ecom){
      if(err) throw err
      ecom.title = req.body.title
      ecom.description = req.body.description
      ecom.product = req.body.product
      ecom.color = req.body.color
      ecom.style = req.body.style
      ecom.pages = req.body.pages
      ecom.company = req.body.company
      ecom.onlinePayments = req.body.onlinePayments
      ecom.additionalInfo = req.body.additionaInfo
    })
  },
  create: function(req,res) {
    var newEcom = new Eccommerce(req.body)
    newEcom.save(function(err,ecom){
      if(err) throw err
      res.json({message: 'Ecommerce is created', ecom: ecom})
    })
  }
}
