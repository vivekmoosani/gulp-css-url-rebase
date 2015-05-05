'use strict';

var exec = require('child_process').exec;

module.exports = function (done) {
  exec('./node_modules/.bin/mocha', done);
};