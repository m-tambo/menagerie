app.controller('animalCtrl', function($scope, $routeParams, AnimalFact) {

  console.log("$routeParams.id:", $routeParams.id)
  $scope.animalId = $routeParams.id
  console.log("$scope.animalId:", $scope.animalId)

  const popPage = (id) => {
    AnimalFact.getOneAnimal()
      .then((animal) => {
        console.log("animal:", animal)
        $scope.animal = animal
      })
  }

  popPage($routeParams.id)

})
