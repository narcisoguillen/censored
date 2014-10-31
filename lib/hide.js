var source = require('./source.js');

module.exports = function hide(value, key){
  if(typeof value === 'function' || typeof value === 'object' || !value){ return value; }
  var length = value.length > source.showLast ? source.showLast : Math.ceil(value.length / 3);

  var exp  = ".{1,"+source.max+"}$";
  var reg  = new RegExp(exp);
  value    = reg.exec(value)[0];

  return source.handlers[key] ? source.handlers[key](value) : value.replace(/./g, function(v, i, c){
    if(i >= c.length - length ){ return v; }
    return source.char;
  });
};
