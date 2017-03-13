app.controller("HeroEntryController", ["$http", function($http) {
  console.log("HeroEntryController is working");

  var self = this;
  //containers
  self.newHero = {};
  self.powers = [];

  getPowers();

  self.addHero = function() {
    $http.post('/heroes', self.newHero)
      .then(function(response) {
        console.log("New hero added to database!");
        self.newHero = {};
      })//end of .then
  }//end of addHero()

  function getPowers() {
    $http.get('/powers')
      .then(function(response) {
        self.powers = response.data;
        console.log("Got powers from database");
      })//end then
  }//end of getPowers()
}]);//end controller
