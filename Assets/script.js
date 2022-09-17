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
    
    userPrompt1 = confirm ("Would you like your password to include LowerCase letters?"); // this confirm allows the user to select if they want lowercase letters in their password
    if (userPrompt1){
      userPrompt1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]; // userPrompt1 gives the array of characters that can be selected
      randomArray= randomArray.concat(userPrompt1); // concat is merging the userPrompt1 with the randomArray
    };

    userPrompt2 = confirm ("Would you like your password to include UpperCase letters?");
    if (userPrompt2){
      userPrompt2 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
      randomArray= randomArray.concat(userPrompt2);
    };

    userPrompt3 = confirm ("Would you like your password to include Special Characters?");
    if (userPrompt3){
      userPrompt3 = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
      randomArray= randomArray.concat(userPrompt3);
    };

    userPrompt4 = confirm ("Would you like your password to include numbers?")
    if (userPrompt4){
      userPrompt4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
      randomArray= randomArray.concat(userPrompt4);
    }
    console.log(randomArray); // this is logging the randomArray that contains all the options of characters that the user selected
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;  // this displays the password - "a1d4" to the textArea

}
    
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
