app.controller("HeroEditController", ["$http", function($http) {
  console.log("HeroEditController is working");

  var self = this;
  //container
  self.heroes = [];
//calls getHeroes()
  getHeroes();

  function getHeroes() {
    $http.get('/heroes')
      .then(function(response) {
        //console.log(response);
        //console.log('heroes: ', self.heroes);
        self.heroes = response.data;
      })//end  of .then
  }//end of getHeroes()

  self.deleteHero = function(hero) {
    $http.delete('/heroes/' + hero.id)
      .then(function(response) {
        //console.log("deleted hero: ", hero.name );
        getHeroes();
      })//end of .then
  }//end of deleteHero()

}]);//end controller
