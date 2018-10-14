//Given a non-empty array of integers, every element appears twice except for one. Find that single one.


function singleNumber(array) {
  let seen = {};

  array.forEach(val => {
    if (seen[val]) {
      seen[val] += 1
    } else {
      seen[val] = 1
    }
  });

  return Object.keys(seen).filter(key => seen[key] === 1).map(Number)[0];
}

singleNumber([2,2,1]); // 1
singleNumber([4,1,2,1,2]); // 4 
