let intersect = function(nums1, nums2) {
  let hash = {};
  let result = [];
  
  nums1.forEach(num => {
    if (!hash[num]) {
      hash[num] = 1;
    } else if (hash[num]) {
      hash[num] += 1;
    }            
  });
  
  nums2.forEach(num => {
    if (hash[num]) {
      result.push(num);
      hash[num] -= 1;
    }  
  });
  
  return result;  
};