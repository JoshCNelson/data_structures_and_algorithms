/*
*PROBLEM DOMAIN*
 input:
  - a string of characters e.g. "172.16.254.1"

 output: 
  - "IPv4"
  - "IPv6"
  - "Neither"
 implicit requirements:
 rules:
  - IPv4
    - 4 decimal numbers seprated by dot-decimal notation 
    - each decimal ranges from 0 to 255, seperated by "."
    - leading zeroes in IPv4 is invalid
      - e.g. "172.16.254.01"
  
  - IPv6
    - eight groups of 4 hexadecimal digits
      - each groups represents 16 bits
      - hexadecimal defintiion is: A-F / 0-9
    - each group is seperated by colons ":"
    - leading zeroes can be ommitted but must have at least 1 if it would result in two colons consecutively"::"
    - the letters can be either upper or lower case
    - extra leading zeroes are also invlid i.e. "02001:etc..."

    - neither is returned if the input is nether ipv4 or ipv6
     

 questions?:
  - is 0 to 255 inclusive? i.e. can we use a 0 or 255 in an IPv4
    - I think so?

*TEST CASES*
 Normal case:
  - Input => "172.16.254.1" output => "IPv4"
  - Input => "2001:0db8:85a3:0:0:8A2E:0370:7334" output => "IPv6"
  - Input => 256.256.256.256"output => "Neither"
 Edge Case?:
*DATA STRUCTURE*
  - the input is a string and the output is a string
  - 
*Algorithm*
  - if the input string contains either a "." or a ":"
  - else if "."
    - run the string through the rules for IPv4
      - split on '.'
      - the array length should be 4
        - if not return "neither"
      - iterate over the array and for each char evaluate the following
        - make sure the first character is not a "0"
          - if it is, return "neither"
      - convert to Number and check that it's between 0 - 255  && not NAN
    - if those are all true
      - return a'IPv4"
  - else if ":" 
    - run the string through the rules for IPv6
      - split on ":"
      - check that array length is 8
      - loop over the array and for each char eval the following
        - check that each length between 1 - 4
        - use regex to match (A-F / 0-9)/gi (make sure case-insensitive)
          - if any characters not in that range return "neither" 
  - if they pass, return "IPv4" or "IPv6" else "neither"
*/

function validIPAddress(string) {
  let delimiter = checkForDelimiter(string.slice(0, 5));

  if (delimiter === '.') {
    return checkIPv4(string) ? "IPv4" : "Neither";
  } else if (delimiter === ':') {
    return checkIPv6(string) ? "IPv6" : "Neither";
  } else {
    return 'Neither';
  }
}

function checkForDelimiter(string) {
  if (string.match(/\./)) {
    return '.'
  } else if (string.match(/\:/)) {
    return ':'
  }
}

function checkIPv4(string) {
  let groups = string.split('.');
  if (groups.length !== 4) {
    return false;
  }  

  for (let i = 0; i < groups.length; i++) {
    if (groups[i][0] == '0' && groups[i].length > 1) {
     return false; 
    }

    if (groups[i].length === 0) {
      return false;
    }

    if (groups[i].match(/[^0-9]/)) {
      return false;
    }

    let numberGroup = Number(groups[i]);

    if (numberGroup < 0 || numberGroup > 255) {
      return false;
    }
  }

  return true;
}

function checkIPv6(string) {
  let groups = string.split(':');
  if (groups.length !== 8) {
    return false;
  }

  for (let i = 0; i < groups.length; i++) {
    let numberGroups = groups[i];
    if (numberGroups.length < 1 || numberGroups.length > 4) {
      return false;
    }

    if (numberGroups.match(/[^0-9A-F]/i)) {
      return false;
    }
  }

  return true;
}

console.log(validIPAddress('0.0.0.0') === 'IPv4')
console.log(validIPAddress('255.255.255.255') === 'IPv4')
console.log(validIPAddress('256.256.256.256') === 'Neither')

console.log(validIPAddress('2001:0db8:85a3:0000:0000:8a2e:0370:7334') === 'IPv6')
console.log(validIPAddress('1:1:1:1:1:1:1:1') === 'IPv6')
console.log(validIPAddress('0001:1:1:1:1:1:1:1') === 'IPv6')
console.log(validIPAddress('1:1:1:1:1:1:1:1001') === 'IPv6')
console.log(validIPAddress('000a:1:1:1:1:1:1:1') === 'IPv6') // Letters in hex
console.log(validIPAddress('000a:f:1:1:1:1:1:1') === 'IPv6') // Letters in hex up to f
console.log(validIPAddress('000A:1:1:1:1:1:1:1') === 'IPv6') // Case insensitive
console.log(validIPAddress('a:a:a:a:a:a:a:a') === 'IPv6')
console.log(validIPAddress('ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff') === 'IPv6') // IPv6 up to 8 groups, 16 bit hex numbers

console.log(validIPAddress('') === 'Neither') // Empty string
console.log(validIPAddress('01.1.1.1') === 'Neither') // No leading zeroes
console.log(validIPAddress('1.1.1.01') === 'Neither') // No leading zeroes
console.log(validIPAddress('255.255.255') === 'Neither') // Must have 4 groups
console.log(validIPAddress('255.255.255.255.255') === 'Neither') // Must have 4 groups

console.log(validIPAddress('255.255:255.255') === 'Neither') // Can't have mix of colons and dots
console.log(validIPAddress('255,255,255,255') === 'Neither') // Can't have non colon or dot delimiters
console.log(validIPAddress('255,255,255,255,255,255,255,255') === 'Neither') // Can't have non colon or dot delimiters

console.log(validIPAddress('1:1:1:1:1:1:1') === 'Neither') // Can't have <8 groups
console.log(validIPAddress('1:1:1:1:1:1:1:1:1') === 'Neither') // Can't have >8 groups
console.log(validIPAddress('1:1:1:1:1::1:1') === 'Neither') // No empty groups, even if 0s
console.log(validIPAddress('a:b:c:d:e:f:g:h') === 'Neither') // Hex is only up to f
console.log(validIPAddress('a:b:c:d::e:f:g:h') === 'Neither') // Can't have double colons even with 8 groups
console.log(validIPAddress('00001:1:1:1:1:1:1') === 'Neither') // Leading zeroes okay, but not more than 4 digits per group

