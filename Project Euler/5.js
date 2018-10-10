// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const smallestMultiple = () => {
  for (let i = 20; ; i++) {
    if (multipleCheck(i)) {
      return i;
    }
  }
}

const multipleCheck = n => {
  for (let i = 1; i < 20; i++) {
    if (n % i !== 0) {
      return false;
    }
  }

  return true;
}

smallestMultiple();