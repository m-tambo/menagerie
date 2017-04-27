app.factory('AnimalFact', function($http) {

const server = 'https://menagerie-api-123.herokuapp.com/api/v1'

  return {
    getAll: function() {
        return new Promise((resolve, reject) =>{
          $http.get(`${server}/animals`)
            .then((data) => {
              resolve(data.data)
            })
        })
      },
    getOneAnimal: function(id) {
        return new Promise((resolve, reject) =>{
          $http.get(`${server}/animals/${id}`)
            .then((data) => {
              resolve(data.data)
            })
        })
      },
    getAnimalsKeepers: function() {
        return new Promise((resolve, reject) =>{
          $http.get(`${server}/keepers`)
            .then((data) => {
              resolve(data.data)
            })
        })
      },
    add: function(newAnimal) {
      return new Promise((resolve, reject) =>{
        $http.post(`${server}/animals/new`, newAnimal)
          .then((data) => {
            resolve(data)
          })
        })
    },

    remove: function(id) {
      return new Promise((resolve,reject) => {
        $http.delete(`${server}/animals/${id}`)
          .then((data) => {
            resolve()
          })
      })
    },

    update: (id, updateInfo) => {
      return new Promise((resolve, reject) => {
        $http.patch(`${server}/animals/update/${id}`, updateInfo)
        .then((data) => {
          resolve()
        })
        .catch((err) => console.log("err:", err))
      })
    }
  }
});
