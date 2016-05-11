var
  express = require('express'),
  ecommerceRouter = express.Router()
  ecommerceCtrl = require('../controller/ecommerceCtrl.js')

ecommerceRouter.route('/')
  .get(ecommerceCtrl.index)
  .post(ecommerceCtrl.create)

ecommerceRouter.route('/:id')
  .get(websiteCtrl.show)
  .delete(websiteCtrl.destroy)
  .patch(websiteCtrl.update)


module.exports = ecommerceRouter
