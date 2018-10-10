//Write a function that counts the number of occurrences of each element in a given array. 
//Once counted, log each element alongside the number of occurrences.

var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];


function countOccurrences(array) {
  const container = {};
  const vehicleCount = v => container[v] ? container[v] += 1 : container[v] = 1;

  vehicles.forEach(vehicleCount);

  for (vehicle in container) {
    console.log(`${vehicle} => ${container[vehicle]}`);
  }
}

countOccurrences(vehicles);

// console output
//car => 4
//truck => 3
//SUV => 1
//motorcycle => 2