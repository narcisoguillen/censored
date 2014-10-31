var search = require('./search');
var source = require('./source');
var _      = require('underscore');

function Censore(object){
  var obj = _.clone(object);
  search(obj);
  return obj;

};

module.exports = Censore;

module.exports.set = function(name, value){ source[name] = value; };
module.exports.get = function(attr){ return source[attr]; };
module.exports.add = function(name, handler){ return source.handlers[name] = handler; };
