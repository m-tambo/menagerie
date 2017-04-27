app.factory('TrainerFact', function($http){

  const server = 'https://menagerie-api-123.herokuapp.com/api/v1'

    return {
    getAll: function() {
        return new Promise((resolve, reject) =>{
          $http.get(`${server}/trainers`)
            .then((data) => {
              resolve(data)
            })
        })
      },
    update: (id, updateInfo) => {
      return new Promise((resolve, reject) => {
        $http.patch(`${server}/trainers/update/${id}`, updateInfo)
        .then((data) => {
          resolve()
        })
        .catch((err) => console.log("err:", err))
      })
    },
    delete: function(id) {
      return new Promise((resolve, reject) => {
        $http.delete(`${server}/trainers/${id}`)
          .then((data) => {
            resolve()
          })
      })
    }
  }
})
