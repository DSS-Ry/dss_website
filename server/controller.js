const axios    = require('axios');
const {User, Board, Post, Reply} = require('./db.js');

var controller = {
  createUser: function(req, res) {
    User.create(req.body)
      .then(function(user) {
        res.json(user);
      })
  },
  getUser: function(req, res) {
    User.findOne({uid: req.params.uid})
      .then(function(user) {
        res.json(user);
      })
  },
  checkUsername: function(req, res) {
    User.findOne({username: req.params.username})
      .then(function(user) {
        if (!user) {
          res.json(false);
        } else {
          res.json(true);
        }
      })
  },
  submitApplication: async function(req, res) {
    await User.updateOne({_id: req.body.user_id}, {application: req.body.application});

    res.sendStatus(201);
  }
};

module.exports = controller;