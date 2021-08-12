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
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
