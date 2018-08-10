const express = require('express')
  , router = express.Router();
const mongoose = require('mongoose');
// import { User } from '../models/User';
const User = require('../models/User.js');

router.get('/:id', function(req, res, next) {
  User.findById(req.params.id,function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

router.get('/', function(req, res, next) {
  User.find(function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

router.post('/', function(req, res, next) {
  User.findOne({ 'email': req.body.email }, 'email', function(err, user) {
    if (err) return next(err);
    if(!user){
      create (res, req);
    }
    else {
      res.json({ 'message': 'email alredy used' });
    }
  });
});

router.put('/', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

function create(res, req) {
  User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}

module.exports = router;
