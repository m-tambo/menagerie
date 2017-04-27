app.factory('TypeFact', function($http){
  console.log("here's the type factory")

    return {
    getAll: function() {
        return new Promise((resolve, reject) =>{
          $http.get(`http://localhost:3000/api/v1/types`)
            .then((data) => {
              console.log(`got some types`, data)
              resolve(data.data)
            })
        })
      },
    add: function(newZookeeper) {
      return new Promise((resolve, reject) =>{
        $http.post(`http://localhost:3000/api/addZookeeper`, newZookeeper)
          .then((data) => {
            resolve(data.data.zookeepers)
          })
        })
    },
    delete: function(id) {
      return new Promise((resolve, reject) => {
        $http.delete(`http://localhost:3000/api/zookeeper/${id}`)
          .then((data) => {
            resolve()
          })
      })
    }
  }
})
