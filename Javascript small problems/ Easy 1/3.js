//Build a program that asks a user for the length and width of a room in meters, and then logs to the console the area of the room in both square meters and square feet.
//Note: 1 square meter == 10.7639 square feet
//Do not worry about validating the input at this time. Use the prompt() function to collect user input.

let SQMETERS_TO_SQFEET = 10.7639;
let length = parseInt(prompt('Enter the length of the room in meters:'), 10);
let width = parseInt(prompt('Enter the width of the room in meters:'), 10);

let areaInMeters = length * width;
let areaInFeet = areaInMeters * SQMETERS_TO_SQFEET;

console.log('The area of the room is ' + areaInMeters.toFixed(2) +
      ' square meters (' + areaInFeet.toFixed(2) + ' square feet).');