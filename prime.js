function isPrime(n) {
	
	// Check if number
	if (typeof n !== 'number') {
		return false;
	}

	// Check if integer
	if (n % 1 !== 0) {
		return false;
	}

  // Check 1 and below (negative)
	if (n < 2) {
		return false;
	}

	// Check if 2 (the only even prime) or even
	if (n === 2) {
		return true;
	} else if (n % 2 === 0) {
		return false;
	}

	// Check remaining odd numbers up to and including square root
	var sr = Math.sqrt(number);
	for (var i = 3; i <= sr; i += 2) {
		if (n % i === 0) {
			return false;
		}
	}

	return true;
}