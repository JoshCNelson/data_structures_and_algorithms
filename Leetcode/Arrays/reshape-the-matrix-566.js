var matrixReshape = function(nums, r, c) {
  let total = 0;
  let count = 0;
  let flatArray = [];
  let reshapedMatrix = [];

  nums.forEach(subArray => {
    subArray.forEach(ele => {
      total++;
      flatArray.push(ele);
    }); 
  });

  if (total !== r * c) { return nums }

  for (let i = 0; i < r; i++) {
    reshapedMatrix.push([]);
  }

  for (let rows = 0; rows < r; rows++) {
    for (let cols = 0; cols < c; cols++) {
      reshapedMatrix[rows].push(flatArray.shift());
    }
  }

  return reshapedMatrix;
};