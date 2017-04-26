app.controller('ZooCtrl', function($scope, AnimalFact){

$scope.editing = false

const popPage = () =>{
  AnimalFact.getAll()
    .then((animals) => {
      $scope.animals = animals
      $scope.$apply()
    })
  AnimalFact.getAnimalsKeepers()
    .then((keepers) => {
      $scope.keepers = keepers
    })
}

popPage()

$scope.remove = (id) => {
  AnimalFact.remove(id)
  .then(() => {
    popPage()
  })
}

$scope.save = (id, updateInfo) => {
  AnimalFact.update(id, updateInfo)
  .then(() => {
    console.log("updated!!")
    $scope.editing = false;
    popPage()
  })
}


})
