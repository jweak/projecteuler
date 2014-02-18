function result() {
	var primes = [2,3,5,7,11,13,17,19,23,29,31,37,
	41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,
	109,113,127,131,137,139,149,151,157,163,167,173];
	var num = 600851475143;
	var foundPrimes = [];


	var findPrimes = function(number) {
		var retVal = 0;
		for (var i = 0; i < primes.length; i++) {
			var result = number / primes[i];
			if (result === parseInt(result)) {
				console.log(result);
				foundPrimes.push(primes[i]);
				retVal = result;
				break;
			}
		}
		return retVal;
	}

	while (num > 173) {
		num = findPrimes(num);
	}
	
	return foundPrimes;
}