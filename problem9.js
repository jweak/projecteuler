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

function problem9() {
  var triplets = findPythagoreanTriplets(1000);
  var tripletsSumOfThousand = triplets.filter(function(triplet) {
    return triplet[0] + triplet[1] + triplet[2] === 1000;
  }); 
  var foundTriplet = tripletsSumOfThousand[0];

  return foundTriplet[0] * foundTriplet[1] * foundTriplet[2];
}