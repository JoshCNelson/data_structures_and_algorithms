
function binarySearch(array, n, start = 0) {
  if  (array.length === 1 && array[0] !== n) {
    return -1;
  }

  let half = Math.floor(array.length / 2);
  let currentIdx = start + half; 

  if (array[half] < n) {
    return binarySearch(array.slice(half), n, currentIdx);
  } else if (array[half] > n) {
    return binarySearch(array.slice(0, half), n, 0); 
  } else {
    return currentIdx
  }
}

var yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Ruby Lounge', 'Zooper'];
binarySearch(yellowPages, 'Pizzeria');                   // 7
binarySearch(yellowPages, 'Apple Store');                // 0
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6
