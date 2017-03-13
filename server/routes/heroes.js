var express = require('express');
var router = express.Router();
var config = require('../config/config.js');
var pg = require('pg');
var bodyParser = require('body-parser');

var pool = new pg.Pool(config);

//needed for angular-routing
router.use(bodyParser.json());

//returns all heroes and powers
router.get('/', function (req, res) {
  pool.connect()
    .then(function (client) {
//joins super_powers to heroes table.  The practice from last weeks group project helped tremendiously with getting this line
      client.query('SELECT heroes.*, super_powers.name, super_powers.description FROM heroes JOIN super_powers ON heroes.power_id=super_powers.id')
        .then(function (result) {
          client.release();
          res.send(result.rows);
        })
        .catch(function (err) {
          console.log('error on SELECT', err);
          res.sendStatus(500);
        });//end of .catch
    });//end of .then
});//end of router.get

//adds heroes data to table
router.post('/', function (req, res) {
  var newHero = req.body;
  console.log('add Hero: ', newHero);
  pool.connect()
    .then(function (client) {
//adds heroes data to table
      client.query('INSERT INTO heroes (persona, alias, power_id) VALUES ($1, $2, $3)',
        [newHero.persona, newHero.alias, newHero.power])
        .then(function (result) {
          client.release();
          res.sendStatus(201);
        })
        .catch(function (err) {
          console.log('error on INSERT', err);
          res.sendStatus(500);
        });//end of .catch
    });//end of .then
});//end of router.post

//delete super heroes
router.delete('/:id', function(req, res) {
  var heroId = req.params.id;
  console.log('deleting super_heroes: ', heroId);
  pool.connect()
    .then(function (client) {
//deletes hero based off ID
      client.query('DELETE FROM heroes WHERE id = $1',
        [heroId])
        .then(function (result) {
          client.release();
          res.sendStatus(200);
        })
        .catch(function (err) {
          console.log('error on SELECT', err);
          res.sendStatus(500);
        });//end of .catch
    });//end of .then
});//end of router.delete

//adds data to database
router.put('/:id', function(req, res) {
  var heroId = req.params.id;
  var hero = req.body;
  console.log('add hero: ', hero);
  pool.connect()
    .then(function (client) {
      client.query('UPDATE heroes SET persona = $1, alias = $2, power_id = $3 WHERE id = $4',
        [hero.persona, hero.alias, hero.power_id, hero.id])
        .then(function (result) {
          client.release();
          res.sendStatus(200);
        })
        .catch(function (err) {
          console.log('error on UPDATE', err);
          res.sendStatus(500);
        });//end of router.put
    });//end of .then
});//end of router.put


module.exports = router;
