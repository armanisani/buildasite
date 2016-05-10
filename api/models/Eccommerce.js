var
  mongoose = require('mongose')


var eccommerceSchema = mongoose.Schema({
  title: {type: String, required: true},
  product: {type: String, required: true},
  color: {type: String, required: true},
  company: String,
  onlinePayments: {type: String, required: true},
  description: {type: String, required: true},
  additionalInfo: String,

})



var Eccommerce = mongoose.model('Eccommerce', eccommerceSchema)


module.exports = Eccommerce
