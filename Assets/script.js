// Assignment Code
var generateBtn = document.querySelector("#generate");
var randomArray= []

function generatePassword() { 
  passwordLength = parseInt(prompt("What would you like the length of your password to be?")); //parseInt turns a string into a number then allows to run the prompt string
  console.log(passwordLength); // logs the value the user enters for length in the console.
  console.log(typeof passwordLength); // logs the type of value the user enters in the console ex: this would be a number. 
    if (passwordLength <=128 && passwordLength >=8){ // this if statement is setting the parameters that the user can select which is between 8 and 128.
    } else {
      alert("Please select a number between 8 and 128 characters"); // this else statement only occurs if the user selects a number outside of 8 adn 128
    };

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;  // this displays the password - "a1d4" to the textArea

}
    
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
