var
  mongoose = require('mongoose')


var socialSchema = mongoose.Schema({
  title: {type: String, required: true},
  color: {type: String, required: true},
  profile: {type: String, required: true},
  description: {type: String, required: true},
  additionalInfo: String
})


var Social = mongoose.model('Social', socialSchema)


module.exports = Social
