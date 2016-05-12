angular.module('buildasite', ['buildasite.controllers', 'buildasite.services'])
.config(function($stateProvider, $urlRouterProvider){



  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'public/index.html',
    controller: 'MainCtrl as main'
  })
  .state('profile', {
    url: '/profile/:id',
    templateUrl: 'public/profile.html',
    controller: 'ProfileCtrl as profile'
  })
  .state('buildasite', {
    url: '/build',
    templateUrl: 'public/build.html',
    controller: 'BuildCtrl as bc'
  })
  .state('websites', {
    url: '/websites',
    templateUrl: 'public/websites.html',
    controller: 'WebsiteCtrl as website'
  })
  .state('ecommerceDetail', {
    url: '/websites/ecommerce/:id',
    templateUrl: 'public/ecommerceDetail.html',
    controller: 'EcommerceDetailCtrl as ec'
  })
  .state('mobileDetail', {
    url: '/websites/mobile/:id',
    templateUrl: 'public/mobileDetail.html',
    controller: 'MobileDetailCtrl as mc'
  })
  .state('singleDetail', {
    url: '/websites/single/:id',
    templateUrl: 'public/singleDetail.html',
    controller: 'SingleDetailCtrl as sc'
  })
  .state('socialDetail', {
    url: '/websites/social/:id',
    templateUrl: 'public/socialDetail.html',
    controller: 'SocialDetailCtrl as sc'
  })
})
