var
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs')


var userSchema = mongoose.Schema({
  first: {type: String, required: true},
  last: {type: String, required: true},
  phone: {type: String, required: true},
  email: {type: String, required: true},
  currentSite: String,
  livingStatus: String,
  username: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  mobile: [{type: mongoose.Schema.Types.ObjectId, ref: "Mobile"}],
  ecommerce: [{type: mongoose.Schema.Types.ObjectId, ref: "Ecommerce"}],
  single: [{type: mongoose.Schema.Types.ObjectId, ref: "Single"}],
  social: [{type: mongoose.Schema.Types.ObjectId, ref: "Social"}],
  contactMethod: {type: String, required: true},
  twitter: String,
  linkedin: String,
  google: String,
  hear: {type: String, required: true}
})


userSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

userSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password)
}

var User = mongoose.model('User', userSchema)

module.exports = User
