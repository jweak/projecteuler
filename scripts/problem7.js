var atkinSieve = require('./atkinSieve');

module.exports = function() {
  "use strict";
  var primes = atkinSieve(110000);
  return primes[10000];
}
