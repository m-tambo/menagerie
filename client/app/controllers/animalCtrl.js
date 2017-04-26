app.controller('animalCtrl', function($scope, $routeParams, animalFact){

  $scope.animalId = $routeParams.id

  const popPage = (animalId) => {
    animalFact.getOneAnimal
      .then((animal) => {
        $scope.animal = animal
      })
  }

  popPage()

})
