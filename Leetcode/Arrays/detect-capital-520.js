function detect(string) {
  return string[0].match(/[A-Z]/) ? checkUpper(string.substr(1)) : checkLower(string);
}

function checkLower(string) {
  return string.match(/[^a-z]/) ? false : true;
}

function allUpper(string) {
  return string.match(/[^A-Z]/) ? false : true;
}

function checkUpper(string) {
  if (allUpper(string) || checkLower(string)) {
    return true;
  } else {
    return false;
  }
}