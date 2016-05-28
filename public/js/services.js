angular.module('buildasite.services', [])
.factory('userService', userService)
.factory('socialService', socialService)
.factory('mobileService', mobileService)
.factory('ecommerceService', ecommerceService)
.factory('singleService', singleService)

function userService($http){
  var url = 'http://localhost:8000/users/'
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
    return $http.post('http://localhost:8000/', data)
  }
  function update(id, data){
    return $http.patch(url + id, data)
  }
  function destroy(id){
    return $http.delete(url + id)
  }
}
function socialService($http){
  var url = 'http://localhost:8000/social'
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
  var url = 'http://localhost:8000/mobile'
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
  var url = 'http://localhost:8000/ecommerce'
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
  var url = 'http://localhost:8000/single/'
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
    return $http.post('http://localhost:8000/', data)
  }
  function update(id, data){
    return $http.patch(url + id, data)
  }
  function destroy(id){
    return $http.delete(url + id)
  }
}
