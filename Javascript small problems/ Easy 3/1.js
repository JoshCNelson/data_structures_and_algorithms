//Build a program that randomly generates Teddy's age, and logs it to the console. 
//Have the age be a random number between 20 and 200 (inclusive).

const randomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age = randomBetween(20, 200);
console.log(`Teddy is ${age} years old!`);
