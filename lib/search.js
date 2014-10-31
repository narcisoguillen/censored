var hide = require('./hide');
var _    = require('underscore');

module.exports = function search(object){
  for(var i in object){
    if(typeof object[i] === 'object'){
      object[i] = _.clone(object[i]);
      search(object[i]);
    }else{
      object[i] = hide(object[i], i);
    }
  }
};
