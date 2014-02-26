(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
window.problem1 = require('./problem1');
window.problem2 = require('./problem2');
window.problem3 = require('./problem3');
window.problem4 = require('./problem4');
window.problem5 = require('./problem5');
window.problem6 = require('./problem6');
window.problem7 = require('./problem7');
window.problem8 = require('./problem8');
window.problem9 = require('./problem9');
window.problem10 = require('./problem10');
window.problem11 = require('./problem11');
},{"./problem1":3,"./problem10":4,"./problem11":5,"./problem2":6,"./problem3":7,"./problem4":8,"./problem5":9,"./problem6":10,"./problem7":11,"./problem8":12,"./problem9":13}],3:[function(require,module,exports){
module.exports = function() {
  var sum = 0;
  for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

},{}],4:[function(require,module,exports){
var atkinSieve = require('./atkinSieve');

module.exports = function() {
  var primes = atkinSieve(2000000);
  var sumOfPrimes = primes.reduce(function(previousValue, currentValue, index, array) {
    return previousValue + currentValue;
  });
  return sumOfPrimes;
}
},{"./atkinSieve":1}],5:[function(require,module,exports){
module.exports = function() {
  var numbersStr = 
    "08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08 " + 
    "49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00 " + 
    "81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65 " + 
    "52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91 " + 
    "22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80 " + 
    "24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50 " + 
    "32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70 " + 
    "67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21 " + 
    "24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72 " + 
    "21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95 " + 
    "78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92 " + 
    "16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57 " + 
    "86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58 " + 
    "19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40 " + 
    "04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66 " + 
    "88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69 " + 
    "04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36 " + 
    "20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16 " + 
    "20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54 " + 
    "01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48";

  var numbers = numbersStr.split(' ').map(function(str) { return parseInt(str, 10); } );
  var biggestProduct = 0, rowProduct, columnProduct, diagonalProduct, i, j, n1, n2, n3, n4;

  // column iteration
  var secondRow = 20;
  var thirdRow = 40;
  var fourthRow = 60;
  for (i = 0; i < 20; i++) {
    for (j = 0; j < 320 + i; j += 20) {
      n1 = numbers[i + j];
      n2 = numbers[i + j + secondRow];
      n3 = numbers[i + j + thirdRow];
      n4 = numbers[i + j + fourthRow];
      columnProduct = n1 * n2 * n3 * n4;
    }
    if (columnProduct > biggestProduct) {
      biggestProduct = columnProduct;
    }
  }

  // row iteration
  for (i = 0; i < numbers.length; i += 20) {
    for (j = 0; j < 16; j++) {
      n1 = numbers[i+j];
      n2 = numbers[i+j+1];
      n3 = numbers[i+j+2];
      n4 = numbers[i+j+3];
      rowProduct = n1 * n2 * n3 * n4;
    }
    if (rowProduct > biggestProduct) {
      biggestProduct = rowProduct;
    }
  }

  // diagonal adjacent product from top left to bottom right
  var secondRowDiagonal = 21;
  var thirdRowDiagonal = 21 * 2;
  var fourthRowDiagonal = 21 * 3;
  for (i = 0, j = 0; i < 17; i++) {
    n1 = numbers[i + j * 20];
    n2 = numbers[i + j * 20 + secondRowDiagonal];
    n3 = numbers[i + j * 20 + thirdRowDiagonal];
    n4 = numbers[i + j * 20 + fourthRowDiagonal];

    diagonalProduct = n1 * n2 * n3 * n4;

    if (diagonalProduct > biggestProduct) {
      biggestProduct = diagonalProduct;
    }

    // go to the next row and reset
    if (i === 16 && j < 16) {
      i = 0;
      j++;
    }
  }

  // diagonal adjacent product from top right to bottom left
  secondRowDiagonal = 19;
  thirdRowDiagonal = 19 * 2;
  fourthRowDiagonal = 19 * 3;
  for (i = 4, j = 0; i < 20; i++) {
    n1 = numbers[i + j * 20];
    n2 = numbers[i + j * 20 + secondRowDiagonal];
    n3 = numbers[i + j * 20 + thirdRowDiagonal];
    n4 = numbers[i + j * 20 + fourthRowDiagonal];

    diagonalProduct = n1 * n2 * n3 * n4;

    if (diagonalProduct > biggestProduct) {
      biggestProduct = diagonalProduct;
    }

    // go to the next row and reset
    if (i === 19 && j < 16) {
      i = 4;
      j++;
    }
  }

  return biggestProduct;
}

},{}],6:[function(require,module,exports){
module.exports = function() {
  var fib1 = 1;
  var fib2 = 2;
  var sumOfEvenNumbers = 2;
  while (fib1 < 4000000) {
    var temp = fib1 + fib2;
    if (temp % 2 === 0) {
      sumOfEvenNumbers += temp;
    }
    fib1 = fib2;
    fib2 = temp;
  }

  return sumOfEvenNumbers;
}


},{}],7:[function(require,module,exports){
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


},{"./atkinSieve":1}],8:[function(require,module,exports){
function isPalindrome(number) {
  if (number < 10 && number >= 0) {
    return true;
  } 
  if (number < 0) {
    number = Math.abs(number);
  }
  var str = "" + number;
  var index = Math.floor(str.length/2);
  var endStr = "", len = str.length;
  if (index === 2) {
    endStr = str.charAt(len-1) + str.charAt(len-2);
  } else if (index === 3) {
    endStr = str.charAt(len-1) + str.charAt(len-2) + str.charAt(len-3);
  } else {
    endStr = str.substr(-index).split('').reverse().join('');
  }
  return str.substring(0, index) === endStr;
}

function findLargestPalindrome(min, max) {
  var i = min;
  var largestPalindrome = 0;
  var num, x;
  while(i < max) {
    for (x = min; x < max; x++)  {
      num = x * i;
      if (isPalindrome(num)) {
        if (num > largestPalindrome)
          largestPalindrome = num;
      }
    }
    i++;
  }
  return largestPalindrome;
}

module.exports = function() {
  return findLargestPalindrome(100, 1000);
}

},{}],9:[function(require,module,exports){
module.exports = function() {
  for (var i = 20; i < 1000000000; i += 20) {
    for (var x = 3; x < 20; x++) {
      if (i % x !== 0) {
        break;
      } else if (x === 19) {
        return i;
      }
    }
  }
}

},{}],10:[function(require,module,exports){
function sumOfSquares(min, max) {
  var sum = 0;
  for (var i = min; i <= max; i++) {
    sum += i * i;
  }
  return sum;
} 

function sumFun(min, max) {
  var sum = 0;
  for (var i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
} 

module.exports = function() {
  var sum = sumFun(1, 100);
  var sumSquares = sumOfSquares(1, 100);

  return sum * sum - sumSquares;
}
},{}],11:[function(require,module,exports){
var atkinSieve = require('./atkinSieve');

function problem7() {
  "use strict";
  var primes = atkinSieve(110000);
  return primes[10000];
}

},{"./atkinSieve":1}],12:[function(require,module,exports){
function findGreatestConsecutiveProduct(number, consecutiveDigits) {
  var numberStr = number + "";
  if (numberStr.length < consecutiveDigits) {
    return -1;
  }
  var numberArray = numberStr.split('').map(function(n) { return parseInt(n, 10); });
  var largestProduct = 0;
  for (var i = 0; i <= (numberArray.length-consecutiveDigits); i++) {
    var product = 1;
    for (var j = i; j < consecutiveDigits+i; j++) {
      product *= numberArray[j]; 
    }
    
    if (product > largestProduct) {
      largestProduct = product; 
    }
  }
  return largestProduct;
}

module.exports = function() {
  var number = 
      "73167176531330624919225119674426574742355349194934" +
      "96983520312774506326239578318016984801869478851843" +
      "85861560789112949495459501737958331952853208805511" +
      "12540698747158523863050715693290963295227443043557" +
      "66896648950445244523161731856403098711121722383113" +
      "62229893423380308135336276614282806444486645238749" +
      "30358907296290491560440772390713810515859307960866" +
      "70172427121883998797908792274921901699720888093776" +
      "65727333001053367881220235421809751254540594752243" +
      "52584907711670556013604839586446706324415722155397" +
      "53697817977846174064955149290862569321978468622482" +
      "83972241375657056057490261407972968652414535100474" +
      "82166370484403199890008895243450658541227588666881" +
      "16427171479924442928230863465674813919123162824586" +
      "17866458359124566529476545682848912883142607690042" +
      "24219022671055626321111109370544217506941658960408" +
      "07198403850962455444362981230987879927244284909188" +
      "84580156166097919133875499200524063689912560717606" +
      "05886116467109405077541002256983155200055935729725" +
      "71636269561882670428252483600823257530420752963450";
  return findGreatestConsecutiveProduct(number, 5);
}
},{}],13:[function(require,module,exports){
function findPythagoreanTriplets(max) {
  var triplets = [];
  for (var i = 1; i < max; i++) {
    var a = i * i;
    for (var j = i+1; j < max; j++) {
      var b = j * j;
      var c = Math.sqrt(a+b);
      if (c === Math.round(c)) {
        triplets.push([i,j,c]);
      }
    }
  }
  return triplets;
}

module.exports = function() {
  var triplets = findPythagoreanTriplets(1000);
  var tripletsSumOfThousand = triplets.filter(function(triplet) {
    return triplet[0] + triplet[1] + triplet[2] === 1000;
  }); 
  var foundTriplet = tripletsSumOfThousand[0];

  return foundTriplet[0] * foundTriplet[1] * foundTriplet[2];
}
},{}]},{},[2])