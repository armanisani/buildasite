var
  mongoose = require('mongoose')


var ecommerceSchema = mongoose.Schema({
  title: {type: String, required: true},
  product: {type: String, required: true},
  color: {type: String, required: true},
  pages: {type: Number, required: true},
  company: String,
  onlinePayments: {type: String, required: true},
  description: {type: String, required: true},
  additionalInfo: String,

})



var Ecommerce = mongoose.model('Ecommerce', ecommerceSchema)


module.exports = Ecommerce
