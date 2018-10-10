//A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.
//Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; return double numbers as-is.

const twice = (number) => {
  return doubleNumberCheck(number) ? number : number * 2;
};

const doubleNumberCheck = (n) => {
  let str = String(n);
  let first_str = str.substr(0, str.length / 2);
  let second_str = str.substr(str.length / 2);
  return first_str === second_str;
};


twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676