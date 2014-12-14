var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Player = mongoose.model('Player');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {

  Player.find(function (err, players) {
    if (err) return next(err);
    res.render('index', {
      title: 'ISYS 475 Project',
      players: players
    });
  });
});
