var dominantIndex = function(nums) {
  let highestVal = 0;
  let highestIdx;
  let nextHighestVal = 0;

  nums.forEach((val, idx) => {
    if (val > highestVal) {
      highestVal = val;
      highestIdx = idx;
    }
  });

  nums.forEach((val, idx) => {
    if (val > nextHighestVal && idx !== highestIdx) {
      nextHighestVal = val;
    }
  });
  
  return highestVal >= nextHighestVal * 2 ? highestIdx : -1;
};