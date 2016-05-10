var
  mongoose = require('mongoose')


var mobileSchema = mongoose.Schema({
  title: {type: String, required: true},
  phoneType: {type: String, required: true},
  tabs: {type: Number, required: true},
  type: {type: String, required: true},
  color: {type: String, required: true},
  description: {type: String, required: true},
  additionalInfo: String
})


var Mobile = mongoose.model('Mobile', mobileSchema)



module.exports = Mobile
