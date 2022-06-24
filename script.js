// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  //Psuedo-code password generator
  //Prompt user for password length between 8 and 128 characters
  //confirm - lowercase, uppercase, numeric, special characters
  //create var to hold answe to prompt/confirm
  //function to validate user answers
  //if and only if user answers are valid, generate password
  //if user answers are invalid, alert user and ask them to try again
  //generate random password
  //return password
  let pwdLength = prompt("How many characters would you like your password to be? (8-128)");
  if (pwdLength < 8 || pwdLength > 128){
    alert("Password must be between 8 and 128 characters");
    return;
  }
  let lowercase = confirm("Would you like to include lowercase letters?");
  let uppercase = confirm("Would you like to include uppercase letters?");
  let numeric = confirm("Would you like to include numeric characters?");
  let special = confirm("Would you like to include special characters?");
  var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericLetters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialLetters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "~", "`", ",", ".", "/", ";", ":", "'", "\"", "<", ">", "?", "|"];
  var passwordLetters = [];
  //console.log(pwdLength);
  if (lowercase === true) {
    passwordLetters = passwordLetters.concat(lowercaseLetters);
  }//console.log(passwordLetters);
  if (uppercase === true) {
    passwordLetters = passwordLetters.concat(uppercaseLetters);
  }//console.log(passwordLetters);
  if (numeric === true) {
    passwordLetters = passwordLetters.concat(numericLetters);
  }//console.log(passwordLetters);
  if (special === true) {
    passwordLetters = passwordLetters.concat(specialLetters);
  }//console.log(passwordLetters);

  var password = "";
  for (var i = 0; i < pwdLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordLetters.length);
    var randomLetter = passwordLetters[randomIndex];
    var password = password + randomLetter;
  }
  console.log(password);
  return password;
}
