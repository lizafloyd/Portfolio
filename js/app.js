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
  $stateProvider
  .state('home', {
    url: '/',
    controller: 'home',
    controllerAs: 'vm'
  })
}

function home (){
  console.log("home controller");
  
}
