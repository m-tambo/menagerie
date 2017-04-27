app.controller('keeperCtrl', function($scope, ZookeeperFact){
$scope.editing = false

const popPage = () =>{
  ZookeeperFact.getAll()
    .then((keepers) => {
      $scope.keepers = keepers
      $scope.$apply()
    })
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
