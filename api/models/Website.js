var
  mongoose = require('mongoose')


  var websiteSchema = mongoose.Schema({
    title: {type: String, required: true},
    type: {
      personal:  {
        multi: Boolean,
        pages: Number
      },
      single: Boolean,
      multi: {
        pages: Number,
        multi: Boolean
      },
      mobile: Boolean,
      eccommerce: Boolean,
      socialMedia: Boolean
    },
    // images file add later
    color: {type: String, required: true},
    description: {type: String, required: true},
    additionalInfo: String
  })


var Website = mongoose.model('Website', websiteSchema)

module.exports = Website
