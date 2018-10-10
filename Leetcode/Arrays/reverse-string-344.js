//344. Reverse String
//Write a function that takes a string as input and returns the string reversed.

function reverse(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    let tempStart = str[start];
    let tempEnd = str[end];

    str = str.slice(0, start) + tempEnd + str.slice(start + 1, str.length);
    str = str.slice(0, end) + tempStart + str.slice(end + 1, str.length);

    start++;
    end--;
  }

  return str;
}