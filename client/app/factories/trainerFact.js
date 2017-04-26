app.factory('TrainerFact', function($http){
  console.log("here's the trainer factory")

    return {
    getAll: function() {
        return new Promise((resolve, reject) =>{
          $http.get(`http://localhost:3000/api/v1/trainers`)
            .then((data) => {
              resolve(data)
            })
        })
      },
    update: (id, updateInfo) => {
      return new Promise((resolve, reject) => {
        $http.patch(`http://localhost:3000/api/v1/trainers/${id}`, updateInfo)
        .then((data) => {
          resolve()
        })
        .catch((err) => console.log("err:", err))
      })
    },
    delete: function(id) {
      return new Promise((resolve, reject) => {
        $http.delete(`http://localhost:3000/api/trainers/${id}`)
          .then((data) => {
            resolve()
          })
      })
    }
  }
})
