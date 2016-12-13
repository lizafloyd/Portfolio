angular
.module('portfolio', [
  'ui.router'
])
.config([
  '$stateProvider',
  '$locationProvider',
  Router
])
.controller('home', [
  '$state',
  home
])

function Router ($stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true)
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'js/ng-views/home.html',
    controller: 'home',
    controllerAs: 'vm'
  })
  .state('wanderfully', {
    url:'/wanderfully',
    templateUrl: "js/ng-views/wanderfully.html"
  })
  .state('connectplus', {
    url:'/connectplus',
    templateUrl: "js/ng-views/connectplus.html"
  })
  .state('simon', {
    url:'/simon',
    templateUrl: "js/ng-views/simon.html"
  })
  .state('sevenforks', {
    url:'/sevenforks',
    templateUrl: "js/ng-views/sevenforks.html"
  })
}

function home ($state){

  $(document).ready(function() {
    $("#owl-demo").owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
    });
  });
}
