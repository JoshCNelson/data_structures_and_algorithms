//Write a function that takes one argument, a positive integer, 
//and returns the sum of its digits. Do this using list processing techniques.

const sum = num => String(num).split('').map(val => parseInt(val, 10)).reduce((acc, val) => acc + val)

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45
