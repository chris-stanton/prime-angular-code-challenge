app.controller("HeroEditController", ["$http", function($http) {
  console.log("HeroController is running");

  var self = this;
  self.heroes = [];

  getHeroes();

  function getHeroes() {
    $http.get('/heroes')
      .then(function(response) {
        console.log(response);
        self.heroes = response.data;
      })//end of .then
  }//end of getHeroes()

  self.deleteHero = function(hero) {
    $http.delete('/heroes/' + hero.id)
      .then(function(response) {
        console.log("deleted hero: ", hero.name );
        getHeroes();
      })//end of .then
  }//end of self.deleteHero()
}]);//end controller
