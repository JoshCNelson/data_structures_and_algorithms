//13. Roman to Integer

const NUMERALS = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
  'IV': 4,
  'IX': 9,
  'XL': 40,
  'XC': 90,
  'CD': 400,
  'CM': 900,
}


function romanToInt(s) {
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    let slice = NUMERALS[s.slice(i, i + 2)]
    if (i === s.length - 1) {
      sum += NUMERALS[s[i]]
    } else if (slice) {
      sum += slice;
      i++;
    } else {
      sum += NUMERALS[s.slice(i, i + 1)];
    }
  }

  return sum
}
