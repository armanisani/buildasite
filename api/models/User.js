var
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs')


var userSchema = mongoose.Schema({
  first: {type: String, required: true},
  last: {type: String, required: true},
  phone: {type: String, required: true},
  currentSite: String,
  livingStatus: {type: String, required: true},
  country: {type: String, required: true},
  username: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  website: [{type: mongoose.Schema.Types.ObjectId, ref: "Website"}],
  contactMethod: {type: String, required: true},
  twitter: String,
  linkedin: String,
  google: String,
  youtube: String
})


userSchema.methods.generateHash = function(passowrd){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

userSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password)
}

var User = mongoose.model('User', userSchema)

module.exports = User
