angular.module('buildasite', ['ui.router', 'buildasite.controllers', 'buildasite.services'])
.config(function($stateProvider, $urlRouterProvider){



  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '../index.html',
    controller: 'MainCtrl as main'
  })
  .state('profile', {
    url: '/profile/:id',
    templateUrl: '../profile.html',
    controller: 'ProfileCtrl as pc'
  })
  .state('buildasite', {
    url: '/build',
    templateUrl: '../build.html',
    controller: 'BuildCtrl as bc'
  })
  .state('websites', {
    url: '/websites',
    templateUrl: '../websites.html',
    controller: 'WebsiteCtrl as website'
  })
  .state('ecommerceDetail', {
    url: '/websites/ecommerce/:id',
    templateUrl: '../ecommerceDetail.html',
    controller: 'EcommerceDetailCtrl as ec'
  })
  .state('mobileDetail', {
    url: '/websites/mobile/:id',
    templateUrl: '../mobileDetail.html',
    controller: 'MobileDetailCtrl as mc'
  })
  .state('singleDetail', {
    url: '/websites/single/:id',
    templateUrl: '../singleDetail.html',
    controller: 'SingleDetailCtrl as sc'
  })
  .state('socialDetail', {
    url: '/websites/social/:id',
    templateUrl: '../socialDetail.html',
    controller: 'SocialDetailCtrl as sc'
  })

  $urlRouterProvider.otherwise('/')
})
