var
  express = require('express'),
  singleRouter = express.Router()
  singleCtrl = require('../controller/singleCtrl.js')


singlerouter.route('/')
  .get(singleCtrl.index)
  .post(singleCtrl.create)

singleRouter.route('/:id')
  .get(singleCtrl.show)
  .delete(singleCtrl.destroy)
  .patch(singleCtrl.update)

module.exports = singleRouter
