angular.module('buildasite.controllers', [])
  .controller('MainCtrl', MainCtrl)
  .factory('authInterceptor', authInterceptor)
  // .service('user', userService)
  // .service('auth', authService)
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
      $state.go('home', {user: vm.currentUserId})
     }
    // vm.message = res.data.message;
  }
  vm.login = function() {
  console.log('got to main login func')
  user.login(vm.loginUser.username, vm.loginUser.password)
    .then(handleRequest, handleRequest)
  }
  vm.register = function() {
    user.register(vm.newUser.first, vm.newUser.last, vm.newUser.phone, vm.newUser.email, vm.newUser.currentSite, vm.newUser.livingStatus, vm.newUser.username, vm.newUser.password, vm.newUser.mobile, vm.newUser.contactMethod, vm.newUser.twitter, vm.newUser.linkedin, vm.newUser.google, vm.newUser.hear )
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


      function authInterceptor(API, auth) {

        return {
          request: function(config) {
            var token = auth.getToken();
            if (token) {
              config.headers['x-access-token'] = token;
              //console.log(config.headers)
            }
            //console.log(config)
            return config;
          },
          response: function(res){
             if(res.data.token){auth.saveToken(res.data.token)};
             return res;
           }
        }
      }

      function authService($window) {
      var vm = this
      vm.parseJwt = function(token) {
        var base64Url = token.split('.')[1]
        var base64 = base64Url.replace('-', '+').replace('_', '/')
        return JSON.parse($window.atob(base64))
      }
      // save the token
      vm.saveToken = function(token) {
        $window.localStorage['jwtToken'] = token;
      }
      // get token
      vm.getToken = function() {
        return $window.localStorage['jwtToken'];
      }
      // checking the token to see if user is authenticated
      vm.isAuthed = function() {
        var token = vm.getToken();
        if(token) {
          var params = vm.parseJwt(token);
          return Math.round(new Date().getTime() / 1000) <= params.exp;
        } else {
          return false;
        }
      }
      // removes token from local storage
      vm.logout = function() {
        $window.localStorage.removeItem('jwtToken');
        $window.localStorage.removeItem('cID');
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
