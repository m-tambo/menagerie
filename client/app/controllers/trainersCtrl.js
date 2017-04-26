app.controller('TrainersCtrl', function($scope, TrainerFact) {

  // console.log("$routeParams.id:", $routeParams.id)
  // $scope.trainerId = $routeParams.id
  // console.log("$scope.trainerId:", $scope.trainerId)

 const popPage = () => {
  TrainerFact.getAll()
    .then((trainers) => {
      // console.log(trainers)
      $scope.trainers = trainers.data
      console.log($scope.trainers)
      $scope.$apply()
    })
}

popPage()

$scope.remove = (id) => {
  console.log(id)
  TrainerFact.delete(id)
  .then((data) => {
    console.log('removed', data)
    popPage()
  })
}

$scope.save = (id, updateInfo) => {
  TrainerFact.update(id, updateInfo)
  .then(() => {
    console.log("updated!!")
    $scope.editing = false;
    popPage()
  })
}

})
