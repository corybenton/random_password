 let pwArray = {
  lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
     "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", 
      "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  special: [" ", "!", "#", "$", '"', "%", "&", "'", "(", ")", "*", ",", "-", ".", 
      "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "\\", "^", "_", "`", "{", 
      "|", "}", "~"],
  useLower: true, 
  useUpper: true, 
  useNumber: true, 
  useSpecial: true,
 }


// Assignment Code
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(userLength) {
  let password =[];
  let passwordText = "";

  if (pwArray.useLower) {password = password.concat(pwArray.lower);} 

  if (pwArray.useUpper) {password = password.concat(pwArray.upper);}
  
  if (pwArray.useNumber) {password = password.concat(pwArray.number);}

  if (pwArray.useSpecial) {password = password.concat(pwArray.special);}

  for (let p = 0; p < userLength; p++){
    let r = Math.floor(Math.random() * password.length);
    passwordText = passwordText + password[r];
  }

  return passwordText;
}

// Write password to the #password input
function writePassword() {
  
  let passwordText = document.querySelector("#password");

  let userLength = prompt("How many characters would you like in your password?");
  while (Math.floor(userLength) != userLength || userLength < 8 || userLength > 128)
    {userLength = prompt("I need an integer between 8 and 128.")};

  pwArray.useLower = confirm("Are lower case letters to be included?");
  pwArray.useUpper = confirm("Are upper case letters to be included?");
  pwArray.useNumber = confirm("Are numbers to be included?");
  pwArray.useSpecial = confirm("Are special characters to be included");
  if (!pwArray.useLower && !pwArray.useUpper && !pwArray.useNumber && !pwArray.useSpecial){
    alert("No password could be made.");}

  let password = generatePassword(userLength);
  
  
  passwordText.value = password;

}