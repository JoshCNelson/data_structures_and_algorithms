//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//What is the 10 001st prime number?

const findPrimeNumber = n => {
  let count = 1;
  let number;

  for (let i = 3; count < n; i += 2) {
    if (isPrime(i)) {
      count += 1;
      number = i;
    }
  }

  return number;
}

const isPrime = n => {
  for (let i = 3; i < n - 1; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

findPrimeNumber(10001);
