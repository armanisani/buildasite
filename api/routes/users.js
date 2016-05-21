var
  express = require('express')
  userRouter = express.Router()
  userCtrl = require('../controller/userCtrl.js')

userRouter.post('/authenticate', userCtrl.authenticate)
userRouter.route('/users')
.get(userCtrl.index)
userRouter.route('/')
  .post(userCtrl.create)

userRouter.route('/users/:id')
  .get(userCtrl.show)
  .delete(userCtrl.destroy)
  .patch(userCtrl.update)


module.exports = userRouter
