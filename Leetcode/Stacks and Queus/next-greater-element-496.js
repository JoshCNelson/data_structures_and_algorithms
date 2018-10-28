//496. Next Greater Element I
//Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
//Output: [-1,3,-1]
//Explanation:
//    For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
//    For number 1 in the first array, the next greater number for it in the second array is 3.
//    For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
//Example 2:
//Input: nums1 = [2,4], nums2 = [1,2,3,4].
//Output: [3,-1]
//Explanation:

function nextGreater(arr1, arr2) {
  let cache = {};
  let stack = [];

  arr2.forEach(val => {
    if (stack.length === 0 || val <= stack.slice(-1)) {
      stack.push(val);
    } else {
      while (stack.length > 0 && stack.slice(-1) < val) {
        cache[stack.pop()] = val;
      }
      stack.push(val);
    }
  });

  return arr1.map(val => cache[val] || -1);
}