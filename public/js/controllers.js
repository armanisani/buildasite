angular.module('buildasite.controllers', [])
  .controller('MainCtrl', MainCtrl)
  .controller('ProfileCtrl', ProfileCtrl)
  .controller('BuildCtrl', BuildCtrl)
  .controller('WebsiteCtrl', WebsiteCtrl)
  .controller('SocialDetailCtrl', SocialDetailCtrl)
  .controller('EcommerceDetailCtrl', EcommerceDetailCtrl)
  .controller('SingleDetailCtrl', SingleDetailCtrl)
  .controller('SocialDetailCtrl', SocialDetailCtrl)
  .controller('MobileDetailCtrl', MobileDetailCtrl)

MainCtrl.$inject = ["$stateParams", "$rootScope", "$state", "auth", "user", "$window"]

  function MainCtrl($stateParams, $rootScope, $state, auth, user, $window){
    var vm = this
    vm.currentUserId = ""
    vm.newUser = {}
    vm.loginUser = {}
    function handleRequest(res) {
    var token = res.data ? res.data.token : null;
    if (token) {
      console.log('JWT:', token);
      auth.saveToken(token)
      vm.currentUserId = res.data.user._id
      $window.localStorage['cID'] = vm.currentUserId;
      console.log('id>>>', vm.currentUserId)
      $state.go('tab.profile-user', {user: vm.currentUserId})
     }
    // self.message = res.data.message;
  }
  vm.login = function() {
  console.log('got to main login func')
  user.login(self.loginUser.username, self.loginUser.password)
    .then(handleRequest, handleRequest)
  }
  vm.register = function() {
    user.register(self.newUser.username, self.newUser.password, self.newUser.email)
      .then(handleRequest, handleRequest)
  }
  vm.getQuote = function() {
    user.getQuote()
      .then(handleRequest, handleRequest)
  }
  vm.logout = function() {
    auth.logout && auth.logout()
  }
  vm.isAuthed = function() {
    return auth.isAuthed ? auth.isAuthed() : false
  }
  }

  function ProfileCtrl(){}

  function BuildCtrl(){}

  function WebsiteCtrl(){}

  function SocialDetailCtrl(){}

  function EcommerceDetailCtrl(){}

  function SingleDetailCtrl(){}

  function SocialDetailCtrl(){}

  function MobileDetailCtrl(){}
