var
  express = require('express'),
  socialRouter = express.Router()
  socialCtrl = require('../controller/socialCtrl.js')

socialRouter.route('/')
  .get(socialCtrl.index)
  .post(socialCtrl.create)

socialRouter.route('/:id')
  .get(socialCtrl.show)
  .delete(socialCtrl.destroy)
  .patch(socialCtrl.update)

module.exports = socialRouter
