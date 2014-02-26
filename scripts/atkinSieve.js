module.exports = function(until) {
  "use strict";
  var n,i,x,j;

  var sieve = [];
  for (i = 0; i < until + 1; i++) {
    sieve[i] = false;
  }
  sieve[0] = false;
  sieve[1] = false;
  sieve[2] = true;
  sieve[3] = true;

  var limitSqrt = Math.sqrt(until);

  for (x = 1; x <= limitSqrt; x++) {
    for (var y = 1; y <= limitSqrt; y++) {
      var yy = ( y * y );
      n = ( 4 * x * x ) + yy;
      if (n <= until && (n % 12 === 1 || n % 12 === 5)) {
        sieve[n] = !sieve[n];
      }
      var x3xx = (3 * x * x);
      n = x3xx + yy;
      if (n <= until && (n % 12 === 7)) {
        sieve[n] = !sieve[n];
      }
      n = x3xx - yy;
      if (x > y && n <= until && (n % 12 === 11)) {
        sieve[n] = !sieve[n];
      }
    }
  }

  // remove all perfect squares 
  for (n = 5; n <= limitSqrt; n++) {
    if (sieve[n]) {
      x = n * n;
      for (i = x; i <= until; i += x) {
        sieve[i] = false;
      }
    }
  }
  var primes = [];
  for (i = 0, j = 0; i <= until; i++) {
    if (sieve[i]) {
      primes.push(i);
    }
  }
  return primes;
}