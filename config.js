'use strict';

var config = {};

config.twitter = {
  apiKey        : 'TOPICWPQUTckbrbRwNAQeqOGA',
  apiSecret     : process.env.TWITTER_SECRET,
  callbackUrl   : 'http://sarahvm.com:3333/auth/twitter/callback'
};

config.github = {
  clientId      :  'df101de47365a885f668',
  clientSecret  : process.env.GITHUB_SECRET,
  callbackUrl   : 'http://sarahvm.com:3333/auth/github/callback'
};

config.google = {
  clientId      :  '802906769224-k0g80t2joidbf0b5lpttd8ald72da272.apps.googleusercontent.com',
  clientSecret  : process.env.GOOGLE_SECRET,
  callbackUrl   : 'http://sarahvm.com:3333/auth/google/callback'
};

config.facebook = {
  clientId      : '788781137828070',
  clientSecret  : process.env.FACEBOOK_SECRET,
  callbackUrl   : 'http://sarahvm.com:3333/auth/facebook/callback'
};

config.trello = {
  clientId      : 'a6e42b4990bed19bb1dc244733af9d22',
  clientSecret  : process.env.TRELLO_SECRET,
  callbackUrl   : 'http://sarahvm.com:3333/auth/trello/callback'
};

config.instagram = {
  clientId      : '0d1823cfd9944f988ff826a6a1d87096',
  clientSecret  : process.env.IG_SECRET,
  callbackUrl   : 'http://sarahvm.com:3333/auth/instagram/callback'
};

module.exports = config;
