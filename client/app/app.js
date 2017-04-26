const app = angular.module('Zoo', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
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
      .when('/trainers', {
        templateUrl: 'partials/trainers.html',
        controller: 'TrainersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
}])
