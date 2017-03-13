app.controller("HeroEntryController", ["$http", function($http) {
  console.log("HERO ENTRY CONTROLLER IS RUNNING!");

  var self = this;
  self.newHero = {};
  self.powers = [];

  getPowers();

  self.addHero = function() {
    $http.post('/heroes', self.newHero)
      .then(function(response) {
        console.log("New hero added to database!");
        self.newHero = {};
      })//end then
  }

  function getPowers() {
    $http.get('/powers')
      .then(function(response) {
        self.powers = response.data;
        console.log("Got powers from database");
      })//end then
  }
}]);//end controller
