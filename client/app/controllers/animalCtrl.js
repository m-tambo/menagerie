app.controller('animalCtrl', function($scope, $routeParams, AnimalFact) {

  const popPage = (id) => { // retrieving the single animal obj, given the id
    AnimalFact.getOneAnimal(id)
      .then((animal) => {
        $scope.animal = animal
        $scope.$apply()
      })
  }

  popPage($routeParams.id) // passing in the specific animal id via route params

})
