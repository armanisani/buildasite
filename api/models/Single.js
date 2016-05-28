var
  mongoose = require('mongoose')


var singleSchema = mongoose.Schema({
  _creator: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  title: {type: String, required: true},
  personal: Boolean,
  business: Boolean,
  pages: {type: Number, required: true},
  color: {type: String, required: true},
  style: {type: String, required: true},
  description: {type: String, required: true},
  additionalInfo: String
})



var Single = mongoose.model('Single', singleSchema)



module.exports = Single
