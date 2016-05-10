var
  express = require('express'),
  websiteRouter = express.Router()
  websiteCtrl = require('../controller/websiteCtrl.js')

websiteRouter.route('/')
  .get(websiteCtrl.index)
  .post(websiteCtrl.create)

websiteRouter.route('/:id')
  .get(websiteCtrl.show)
  .delete(websiteCtrl.destroy)
  .patch(websiteCtrl.update)


module.exports = websiteRouter
