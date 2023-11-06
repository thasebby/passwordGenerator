 // Assignment code here
document.getElementById("generate").addEventListener("click",writePassword);

//declaring global varaible
var passLength;
var includeLower;
var includeUpper;
var includeNumber;
var includeSymbols;

//generates random lower case letter
function randomLower(){
  if(includeLower == true){
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    return lowerCase [Math.floor(Math.random() * lowerCase.length)];      
  }
  else{
    return false;
  }
}

//generates random upper case letter
function randomUpper(){
  if(includeUpper == true){
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return upperCase [Math.floor(Math.random() * upperCase.length)];
  }
  else{
    return false;
  }
} 

//generates random number
function randomNumber(){
  if(includeNumber == true){
    const num = "0123456789";
    return num [Math.floor(Math.random() * num.length)];
  }
  else{
    return false;
  }
}

//generates random symbol
function randomSymbol(){
  if(includeSymbols == true){
    const symbols = "!@#$%*?+_-&"
    return symbols [Math.floor(Math.random() * symbols.length)];
  }
  else{
    return false;
  }
}

//ask user preferences
function getUserPreferences(){
  passLength = prompt("How long do you want your password to be ? (Must be more than 8 letters and less than 128");

  if(isNaN(passLength)){
    window.alert("Not a number!");
    return false;
  }
  else if(passLength < 8){
    window.alert("Not enough characters!");
    return false;
  }
  else if(passLength > 128){
    window.alert("Too many characters!");
    return false;
  }

  includeLower = confirm("Do you want to include lowercase letters?");
  includeUpper = confirm("Do you want to include uppercase letters?");
  includeNumber = confirm("Do you want to include numbers?");
  includeSymbols = confirm("Do you want to include symbols?");

  return true;
}

//generate a password with all the information from above
function generatePassword(){
  if(getUserPreferences() == false){
    return ' ';
  }  
  var password = ' ';
  var possibleFunctions = [ ];

  if(includeLower == true){
    possibleFunctions += randomLower();
  }

  if(includeUpper == true){
    possibleFunctions += randomUpper();
  }

  if(includeNumber == true){
    possibleFunctions += randomNumber();
  }

  if(includeSymbols == true){
    possibleFunctions += randomSymbol();
  }

  console.log(possibleFunctions);

  if(possibleFunctions == ' '){
    window.alert("Please select at least one character type.");
    return ' ';
  }

  for (let i = 0; i < passLength; i++) {
    for (let j =0; j < possibleFunctions.length; j++){
      password += possibleFunctions[j];
    }
  }

  return password;

}
 

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
