var
  mongoose = require('mongoose')


var socialSchema = mongoose.Schema({
  _creator: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  title: {type: String, required: true},
  users: {type: String, required: true},
  uniqueContent: {type: String, required: true},
  color: {type: String, required: true},
  style: {type: String, required: true},
  profile: {type: String, required: true},
  description: {type: String, required: true},
  additionalInfo: String
})


var Social = mongoose.model('Social', socialSchema)


module.exports = Social
