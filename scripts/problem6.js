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