app.controller('AddAnimalCtrl', function($scope, AnimalFact, ZookeeperFact, $location){


  const popPage = () => {
    AnimalFact.getAll()
    .then((animals) => {
      $scope.animals = animals.animals
      $scope.$apply()
    })

    ZookeeperFact.getAll()
    .then((zookeepers) => {
      $scope.zookeepers = zookeepers.zookeepers;
      $scope.$apply()
    })
  }

  popPage()

  resetCheckboxes = (arrayOfCheckboxes) => {
    for (var i = 0; i < arrayOfCheckboxes.length; i++) {
      arrayOfCheckboxes[i].checked = false
    }
  }

  $scope.addAnimal = () => {
    AnimalFact.add($scope.newAnimal)
    .then((data) => {
      $scope.newAnimal = {}
      $location.path('/')
    })
  }

  $scope.addZookeeper = () => {
    ZookeeperFact.add($scope.newZookeeper)
    .then(() => {
      $scope.newZookeeper = {}
      $scope.$apply()
    })
  }

  $scope.deleteZookeeper = (id) => {
    ZookeeperFact.delete(id)
    .then(() => {
      popPage()
      $location.path('/')
    })
  }
})
