angular
.module('portfolio', [
  'ui.router'
])
.config([
  '$stateProvider',
  Router
])
.controller('home', [
  home
])

function Router ($stateProvider) {
  console.log('hitting router');
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

function home (){
  console.log("home controller");

}
