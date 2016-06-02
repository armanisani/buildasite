angular.module('buildasite.services', [])
.factory('userService', userService)
.factory('socialService', socialService)
.factory('mobileService', mobileService)
.factory('ecommerceService', ecommerceService)
.factory('singleService', singleService)

function userService($http){
  var url = 'https://buildasiteworkshop.herokuapp.com/users/'
  var service = {
    index: index,
    show: show,
    create: create,
    delete: destroy,
    update: update
  }
  return service

  function index(){
    return $http.get(url)
  }
  function show(id){
    return $http.get(url + id)
  }
  function create(data){
    console.log("user has been created");
    return $http.post('https://buildasiteworkshop.herokuapp.com/', data)
  }
  function update(id, data){
    return $http.patch(url + id, data)
  }
  function destroy(id){
    return $http.delete(url + id)
  }
}
function socialService($http){
  var url = 'https://buildasiteworkshop.herokuapp.com/social/'
  var service = {
    index: index,
    show: show,
    create: create,
    delete: destroy,
    update: update
  }
  return service

  function index(){
    return $http.get(url)
  }
  function show(id){
    return $http.get(url + id)
  }
  function create(data){
    return $http.post(url, data)
  }
  function update(id, data){
    return $http.patch(url + id, data)
  }
  function destroy(id){
    return $http.delete(url + id)
  }
}
function mobileService($http){
  var url = 'https://buildasiteworkshop.herokuapp.com/mobile/'
  var service = {
    index: index,
    show: show,
    create: create,
    delete: destroy,
    update: update
  }
  return service

  function index(){
    return $http.get(url)
  }
  function show(id){
    return $http.get(url + id)
  }
  function create(data){
    return $http.post(url, data)
  }
  function update(id, data){
    return $http.patch(url + id, data)
  }
  function destroy(id){
    return $http.delete(url + id)
  }
}
function ecommerceService($http){
  var url = 'https://buildasiteworkshop.herokuapp.com/ecommerce/'
  var service = {
    index: index,
    show: show,
    create: create,
    delete: destroy,
    update: update
  }
  return service

  function index(){
    return $http.get(url)
  }
  function show(id){
    return $http.get(url + id)
  }
  function create(data){
    return $http.post(url, data)
  }
  function update(id, data){
    return $http.patch(url + id, data)
  }
  function destroy(id){
    return $http.delete(url + id)
  }
}
function singleService($http){
  var url = 'https://buildasiteworkshop.herokuapp.com/single/'
  var service = {
    index: index,
    show: show,
    create: create,
    delete: destroy,
    update: update
  }
  return service

  function index(){
    return $http.get(url)
  }
  function show(id){
    return $http.get(url + id)
  }
  function create(data){
    return $http.post('https://buildasiteworkshop.herokuapp.com/', data)
  }
  function update(id, data){
    return $http.patch(url + id, data)
  }
  function destroy(id){
    return $http.delete(url + id)
  }
}
