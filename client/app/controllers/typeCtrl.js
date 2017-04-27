app.controller('typeCtrl', function($scope, TypeFact){
  console.log('typeCtrl firing')
$scope.editing = false

const popPage = () =>{
  TypeFact.getAll()
    .then((types) => {
      $scope.types = types
      $scope.$apply()
    })
  // AnimalFact.getAnimalsKeepers()
  //   .then((keepers) => {
  //     $scope.keepers = keepers
  //   })
}

popPage()

// $scope.remove = (id) => {
//   ZookeeperFact.remove(id)
//   .then(() => {
//     popPage()
//   })
// }

// $scope.save = (id, updateInfo) => {
//   ZookeeperFact.update(id, updateInfo)
//   .then(() => {
//     console.log("updated!!")
//     $scope.editing = false;
//     popPage()
//   })
// }


})
