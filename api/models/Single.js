var
  mongoose = require('mongoose')


var singleSchema = mongoose.Schema({
  title: {type: String, required: true},
  personal: {type: Boolean, required: true},
  business: {type: Boolean, required: true},
  pages: {type: Number, required: true},
  color: {type: String, required: true},
  description: {type: String, required: true},
  additionalInfo: String
})



var Single = mongoose.model('Single', singleSchema)



module.exports = Single
