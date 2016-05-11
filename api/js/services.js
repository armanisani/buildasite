angular.module('buildasite', [])
.factory('userService', userService)
.factory('socialService', socialService)
.factory('mobileService', mobileService)
.factory('ecommerceService', ecommerceService)
.factory('singleService', singleService)

function userService($http){
  var service = {
    index: index,
    show: show,
    create: create,
    delete: destroy,
    update: update
  }
  return service

  function index(){
    return $http.get()
  }
}
