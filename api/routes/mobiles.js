var
  express = require('express'),
  mobileRouter = express.Router(),
  mobileCtrl = require('../controller/mobileCtrl.js')

mobileRouter.route('/')
  .get(mobileCtrl.index)
  .post(mobileCtrl.create)

mobileRouter.route('/:id')
  .get(mobileCtrl.show)
  .delete(mobileCtrl.destroy)
  .patch(mobileCtrl.update)


module.exports = mobileRouter
