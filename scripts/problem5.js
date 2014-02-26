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
