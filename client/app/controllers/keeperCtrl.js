app.controller('keeperCtrl', function($scope, ZookeeperFact){
  console.log('keeperctrl firing')
$scope.editing = false

const popPage = () =>{
  ZookeeperFact.getAll()
    .then((keepers) => {
      $scope.keepers = keepers
      $scope.$apply()
    })
  // AnimalFact.getAnimalsKeepers()
  //   .then((keepers) => {
  //     $scope.keepers = keepers
  //   })
}

popPage()

$scope.remove = (id) => {
  ZookeeperFact.remove(id)
  .then(() => {
    popPage()
  })
}

$scope.save = (id, updateInfo) => {
  ZookeeperFact.update(id, updateInfo)
  .then(() => {
    console.log("updated!!")
    $scope.editing = false;
    popPage()
  })
}


})
