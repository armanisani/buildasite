var path = require('path')
var rootPath = path.normalize(__dirname + '/../');

module.exports = {
  development: {
    db: 'mongodb://localhost/build-a-site',
    port: 8000
  },
  rootPath: rootPath
}
