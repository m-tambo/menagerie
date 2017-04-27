const app = angular.module('Zoo', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      })
      .when('/keeper', {
        templateUrl: 'partials/keeper.html',
        controller: 'keeperCtrl'
      })
      .when('/add', {
        templateUrl: 'partials/addAnimals.html',
        controller: 'AddAnimalCtrl'
      })
      .when('/zoo', {
        templateUrl: 'partials/zoo.html',
        controller: 'ZooCtrl'
      })
      .when('/animals/:id', {
        templateUrl: 'partials/singleAnimal.html',
        controller: 'animalCtrl'
      })
      .when('/type', {
        templateUrl: 'partials/type.html',
        controller: 'typeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
}])
