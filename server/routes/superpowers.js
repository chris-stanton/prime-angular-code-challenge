var express = require('express');
var router = express.Router();
var config = require('../config/config.js');
var pg = require('pg');

var pool = new pg.Pool({
  database: config.database
});

// return all super power names
router.get('/', function (req, res) {
  pool.connect()
    .then(function (client) {
//selects all super_powers in ASC order
      client.query('SELECT * FROM super_powers ORDER BY name ASC')
        .then(function (result) {
          client.release();
          res.send(result.rows);
        })
        .catch(function (err) {
          console.log('error on get super_power names', err);
          res.sendStatus(500);
        });
    });
});


module.exports = router;
