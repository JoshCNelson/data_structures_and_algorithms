// Write a function that will take a short line of text, and write it to the console log within a box.

const logInBox = (message) => {
  let horizontalRule = '+' + repeatChar('-', message.length + 2) + '+';
  let emptyLine = '|' + repeatChar(' ', message.length + 2) + '|';

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}

const repeatChar = (char, times) => {
  let repeated = '';
  while (repeated.length < times) {
    repeated += char;
  }

  return repeated;
}

logInBox('this is a test');