// Assignment code here 
let generateBtn = document.querySelector("#generate");
console.log(generateBtn)

// Array reference

const lc = "abcdefghijklmnopqrstuvwxyz";

const uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const spec = "~!@#$%^&*()_+{}|'<>?,./`[]";

const num = "0123456789";

letallChar = "";

//Prompt questions and answer section
function generatePassword() {
  console.log("Button was clicked")
  let pwdLength = prompt(
    "Between 8 and 128 characters, how long would you like your password to be?"
  );
  if (pwdLength < 8 || pwdLength > 128 || isNaN(parseInt(pwdLength))) {
    alert("Please enter a number between 8 and 128.");
  } else {
    let lowerCase = confirm("Would you like to use lowereCase characters?");
    if(lowerCase) {
      allChar += lc
    };
    let upperCase = confirm("Would you like to use upperCase characters?");
    if (upperCase) {
      allChar += uc
    };
    let specialCharacters = confirm("Would you like to use special characters?");
    if(specialCharacters) {
      allChar += spec
    };
    
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
