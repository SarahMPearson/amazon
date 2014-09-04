'use strict';

var local       = require('./local'),
    twitter     = require('./twitter'),
    github      = require('./github'),
    google      = require('./google'),
    facebook    = require('./facebook'),
    trello      = require('./trello'),
    instagram   = require('./instagram'),
    serialize   = require('./serialize'),
    deserialize = require('./deserialize');

module.exports = function(passport, app){
  passport.use(local);
  passport.use(twitter);
  passport.use(github);
  passport.use(google);
  passport.use(facebook);
  passport.use(trello);
  passport.use(instagram);
  passport.serializeUser(serialize);
  passport.deserializeUser(deserialize);

  app.use(passport.initialize());
  app.use(passport.session());
};
