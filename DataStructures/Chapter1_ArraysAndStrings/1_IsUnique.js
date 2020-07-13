// Reference for skeleton structure:
// https://www.dev2qa.com/node-js-get-user-input-from-command-line-prompt-example/

// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

// Prompt user to input data in console.
console.log('Enter a string  to determine if it has all unique characters. \'exit\' to quit.');

// When user input data and click enter key.
standard_input.on('data', function (data) {

    // User input exit.
    if (data === 'exit\n') {
        // Program exit.
        console.log("Program teminated, exiting...");
        process.exit();
    } else {
        // Print result of isUnique()
        console.log('isUnique : ' + isUnique(data));
    }
});

// Accepts any encoding
function isUnique(inputString) {
  let unique = true;
  // Convert string to a character array and sort
  const charArray = inputString.split('');
  charArray.sort();
  // Search for consecutive identical characters
  for (let i=0; i<charArray.length-1; i++) {
    if (charArray[i] === charArray[i+1]) {
      unique = false;
    }
  }
  return unique;
}
