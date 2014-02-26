var atkinSieve = require('./atkinSieve');

module.exports = function() {
  var primes = atkinSieve(2000000);
  var sumOfPrimes = primes.reduce(function(previousValue, currentValue, index, array) {
    return previousValue + currentValue;
  });
  return sumOfPrimes;
}