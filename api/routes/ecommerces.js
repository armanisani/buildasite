var
  express = require('express'),
  ecommerceRouter = express.Router()
  ecommerceCtrl = require('../controller/ecommerceCtrl.js')

ecommerceRouter.route('/')
  .get(ecommerceCtrl.index)
  .post(ecommerceCtrl.create)

ecommerceRouter.route('/:id')
  .get(ecommerceCtrl.show)
  .delete(ecommerceCtrl.destroy)
  .patch(ecommerceCtrl.update)


module.exports = ecommerceRouter
