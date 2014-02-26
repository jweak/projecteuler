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
