// Write a function that takes a floating point number representing an angle between 0 and 360 degrees, and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.
const DEGREE = '\xB0';
const MINUTES_IN_DEGREES = 60
const SECONDS_IN_MINUTES = 60

function dms(float) {
  let degrees = Math.floor(float)
  let degreesRemainder = float - degrees;
  let minutes = MINUTES_IN_DEGREES * degreesRemainder;
  let minutesRemainder = minutes - Math.floor(minutes);
  let seconds = SECONDS_IN_MINUTES * minutesRemainder;
  
  let formatted = format(String(degrees), String(Math.floor(minutes)), String(Math.floor(seconds)));
  return formatted;
}

function format(degrees, minutes, seconds) {
  minutes = minutes.length === 1 ? "0".concat(minutes) : minutes; 
  seconds = seconds.length === 1 ? "0".concat(seconds) : seconds; 
  return `${degrees}${DEGREE}${minutes}'${seconds}"`;
}


dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"