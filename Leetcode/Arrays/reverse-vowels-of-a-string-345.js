var reverseVowels = function(s) {
  let vowels = /[aeiou]/i;
  let stringArray = s.split('');
  let start = 0;
  let end = s.length - 1;
  
  while (start <= end) {
    while (stringArray[start] && stringArray[start].match(vowels) === null) {
      start++;
    }
    

    while (stringArray[end] && stringArray[end].match(vowels) === null) {
      end--;
    }
    
    if (start >= end) { return stringArray.join('') }

    [ stringArray[start], stringArray[end] ] = [ stringArray[end], stringArray[start] ];
    
    start++;
    end--;
  }
  
  return stringArray.join('');
};