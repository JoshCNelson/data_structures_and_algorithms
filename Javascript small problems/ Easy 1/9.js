//Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).
//You may assume that the number passed in is an integer greater than 1.

const multisum = (number) => {
  let array = [];

  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      array.push(i);
    }
  }

  return array.reduce((a, b) => a + b);
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168