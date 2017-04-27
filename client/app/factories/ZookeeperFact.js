app.factory('ZookeeperFact', function($http){

  const server = 'https://menagerie-api-123.herokuapp.com/api/v1'

    return {
    getAll: function() {
        return new Promise((resolve, reject) =>{
          $http.get(`${server}/keepers`)
            .then((data) => {
              resolve(data.data)
            })
        })
      },
    add: function(newZookeeper) {
      return new Promise((resolve, reject) =>{
        $http.post(`${server}/keepers/new`, newZookeeper)
          .then((data) => {
            resolve(data.data.zookeepers)
          })
        })
    },
    delete: function(id) {
      return new Promise((resolve, reject) => {
        $http.delete(`${server}/keepers/${id}`)
          .then((data) => {
            resolve()
          })
      })
    }
  }
})
