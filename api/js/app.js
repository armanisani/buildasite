angular.module('buildasite', ['buildasite.controllers', 'buildasite.services'])
.config(function($stateProvider, $urlRouterProvider){



  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'public/index.html',
    controller: 'MainController as main'
  })
  .state('websites', {
    url: '/websites',
    templateUrl: 'public/websites.html',
    controller: 'WebsiteController as website'
  })
  .state('detail', {
    url: '/'
  })
})
