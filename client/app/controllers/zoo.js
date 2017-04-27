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
  console.log(id)
  AnimalFact.remove(id)
  .then((data) => {
    console.log('removed', data)
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
