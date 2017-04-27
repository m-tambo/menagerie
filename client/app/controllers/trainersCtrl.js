app.controller('TrainersCtrl', function($scope, TrainerFact) {

 const popPage = () => {
  TrainerFact.getAll()
    .then((trainers) => {
      $scope.trainers = trainers.data
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
