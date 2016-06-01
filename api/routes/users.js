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


  userRouter.post('/users/single', isLoggedIn, function(req, res){
    var newSingle = new Single(req.body)
    console.log("req.user");
    console.log(req.user)
    User.findOne({_id: req.user._id}, function(err, user){
      newSingle._creator = user
      newSingle.save(function(err, single){
        console.log(single);
        if (err) console.log(err)
        user.single.push(single)
        user.save(function(err, user){
          res.json({success:true, single})
        })
      })
    })
  })

  function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}


module.exports = userRouter
