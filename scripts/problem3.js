var atkinSieve = require('./atkinSieve');

function largestPrimeFactor(number) {
  "use strict";
  var primeCount = Math.min(number, 1000000);
  var primes = atkinSieve(primeCount);

  var largestPrime = 0;
  var i = primes.length-1;
  while(i) {
    if (number % primes[i] === 0) {
      largestPrime = primes[i];
      break;
    }
    i--;
  }

  return largestPrime;
}

function problem3() {
  "use strict";
  return largestPrimeFactor(600851475143);
}

