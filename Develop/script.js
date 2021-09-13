// Assignment code here
var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "'", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "/", "]", "^", "_", "`", "{", "}", "~"];

// create a function to gather criteia for the password
var passCriteria = function() {

  var passLength = prompt("How long would you like your password to be? Please answer with a number between 8 - 128");
  // check if the answer is between 8 - 128, and check that it is a number
  passLength = parseInt(passLength);
  
  while (passLength < 8 || passLength > 128) {
    alert("Please pick a number between 8 - 128");
    passLength = parseInt(prompt("How long would you like your password to be? Please answer with a number between 8 - 128"));
  }
  
  var lowerCase = confirm("Would you like your password to include lowercase characters?");
  var upperCase = confirm("Would you like your password to include uppercase letters?");
  var numbers = confirm("Would you like your password to include numeric characters?");
  var specialChar = confirm("Would you like your password to include special characters?");
  
  while (!lowerCase && !upperCase && !numbers && !specialChar) {
    alert("You need to select at least one of the criteria. Try again!");
    lowerCase = confirm("Would you like your password to include lowercase characters?");
    upperCase = confirm("Would you like your password to include uppercase letters?");
    numbers = confirm("Would you like your password to include numeric characters?");
    specialChar = confirm("Would you like your password to include special characters?");
  }
  
  return {
    length: passLength,
    lower: lowerCase,
    upper: upperCase,
    numeric: numbers,
    special: specialChar
  }
    
  };

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
