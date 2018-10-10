//The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//Find the sum of all the primes below two million.

const sumOfAllPrimes = n => {
  let total = 2;
  for (let i = 3; i < n; i += 2) {
    if (isPrime(i)) {
      total += i;
    }
  }

  return total;
}

const isPrime = n => {
  for (let i = 3; i < n - 1; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

sumOfAllPrimes(2000000);