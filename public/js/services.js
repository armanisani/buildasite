angular.module('buildasite.services', [])
.factory('userService', userService)
.factory('socialService', socialService)
.factory('mobileService', mobileService)
.factory('ecommerceService', ecommerceService)
.factory('singleService', singleService)

var url = 'http://localhost:8000/'
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
    return $http.get(url)
  }
  function show(id){
    return $http.get(url + id)
  }
  function create(data){
    return $http.post(url, data)
  }
  function update(id, data){
    return $http.patch(apiUrl + id, data)
  }
  function destroy(id){
    return $http.delete(apiUrl + id)
  }
}
function socialService($http){
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
    return $http.patch(apiUrl + id, data)
  }
  function destroy(id){
    return $http.delete(apiUrl + id)
  }
}
function mobileService($http){
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
    return $http.patch(apiUrl + id, data)
  }
  function destroy(id){
    return $http.delete(apiUrl + id)
  }
}
function ecommerceService($http){
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
    return $http.patch(apiUrl + id, data)
  }
  function destroy(id){
    return $http.delete(apiUrl + id)
  }
}
function singleService($http){
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
    return $http.patch(apiUrl + id, data)
  }
  function destroy(id){
    return $http.delete(apiUrl + id)
  }
}
