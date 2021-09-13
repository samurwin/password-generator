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

// getAvailableCharacterTypes() iterate over the lower upper numeric and special chatacter attributes of the character obj
var getAvailableCharacterTypes = function(criteriaObj) {
  var availableCharacterTypes = []
  
  // if it is true add it to the available character array
  if (criteriaObj.lower) {
    availableCharacterTypes.push("lower");
  } if (criteriaObj.upper) {
    availableCharacterTypes.push("upper");
  } if (criteriaObj.numeric) {
    availableCharacterTypes.push("numeric");
  } if (criteriaObj.special) {
    availableCharacterTypes.push("special");
  }

  return availableCharacterTypes;
};

// get random character index (availableCharacterTypesArray.length)
var getRandomCharacterIndex = function (arrayLength) {
  return Math.floor(Math.random() * arrayLength);
};

// get random lower 
var getRandomLower = function () {
  var i = Math.floor(Math.random() * 26);
  char = lowerCharacters[i];
  return char;
};

// get random upper
var getRandomUpper = function () {
  var i = Math.floor(Math.random() * 26);
  var char = lowerCharacters[i].toUpperCase();
  return char;
};

// get random numeric
var getRandomNumeric = function () {
  var i = Math.floor(Math.random() * 10);
  var char = numericCharacters[i];
  return char;
};

// get random special
var getRandomSpecial = function () {
  var i = Math.floor(Math.random() * 31);
  var char = specialCharacter[i];
  return char;
};

// get random character(availableCharacterTypesArray)
var getRandomCharacter = function(availableCharacterTypesArray) {
  var i = getRandomCharacterIndex(availableCharacterTypesArray.length);
  
  var characterType = availableCharacterTypesArray[i];

  // switch statement to decide which character type to randomly generate
  switch (characterType) {
    case "lower":
      return getRandomLower();
    case "upper":
      return getRandomUpper();
    case "numeric":
      return getRandomNumeric();
    case "special":
      return getRandomSpecial();
  }
};
  
// create a function to generate the password
var generatePassword = function(criteriaObj) {
  var availableCharacterTypesArray = getAvailableCharacterTypes(criteriaObj);
  var passwordCharacters = [];
  for (var i = 0; i < criteriaObj.length; i++) {
    var randomCharacter = getRandomCharacter(availableCharacterTypesArray);
    passwordCharacters.push(randomCharacter)
  }
  return passwordCharacters.join('');
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(passCriteria());
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
