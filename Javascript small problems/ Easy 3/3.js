//Build a program that logs when the user will retire 
//and how many more years the user has to work until retirement.

const age = parseInt(prompt('What is your age?'), 10);
const retirementAge = parseInt(prompt('At what age would you like to retire?'), 10);

const today = new Date();

const currentYear = today.getFullYear();
const workYearsToGo = retirementAge - age;
const retirementYear = currentYear + workYearsToGo;

console.log(`It\'s ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${workYearsToGo} years of work to go!`);
