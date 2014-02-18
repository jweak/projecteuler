function problem2() {
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