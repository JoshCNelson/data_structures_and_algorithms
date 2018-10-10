function majorityElement(array) {
  let limit = Math.ceil(array.length / 2);
  let hash = {};

  for (let i = 0; i < array.length; i++) {
    if (!hash[array[i]]) {
      hash[array[i]] = 1;
    } else {
      hash[array[i]] += 1;

      if (hash[array[i]] === limit) { 
        return array[i]; 
      }
    }
  }
}