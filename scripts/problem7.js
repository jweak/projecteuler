var atkinSieve = require('./atkinSieve');

function problem7() {
  "use strict";
  var primes = atkinSieve(110000);
  return primes[10000];
}
