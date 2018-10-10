//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?

function largestPrimeFactor(n) {
  for (let i = Math.floor(n / 2); i > 3; i--) {
    if (isPrime(i) && n % i === 0) {
      return i;
    }
  }
}

function isPrime(n) {
  for (let i = 3; i < n - 1; i += 2) {
    if (n % i === 0) {
       return false;
    }
  }

  return true;
}
//console.log(isPrime(2639));
console.log(largestPrimeFactor(600851475143));
//console.log(largestPrimeFactor(13195));
