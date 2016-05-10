var mongoose = require('mongoose')

module.exports = function(config, dbURL) {
  mongoose.connect(dbURL);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection err...'));
  db.once('open', function callback(){
    console.log("Build a site workshop is open");
  })
}
