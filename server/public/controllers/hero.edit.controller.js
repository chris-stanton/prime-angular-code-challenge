app.controller("HeroEditController", ["$http", function($http) {
  console.log("HERO ENTRY CONTROLLER IS RUNNING!");

  var self = this;
  self.heroes = [];

  getHeroes();

  function getHeroes() {
    $http.get('/heroes')
      .then(function(response) {
        console.log(response);
        self.heroes = response.data;
      })//end then
  }

  self.deleteHero = function(hero) {
    $http.delete('/heroes/' + hero.id)
      .then(function(response) {
        console.log("deleted hero: ", hero.name );
        getHeroes();
      })//end then

  }

}]);//end controller
