 // Assignment code here
document.getElementById("generate").addEventListener("click",writePassword())

function generatePassword() {
  let passwordLength = prompt("How long do you want your password to be? (Has to be more than 8 characters and no more than 128)");

  if(passwordLength > 8 && passwordLength <= 128 ) {
      
  }
  else if(passwordLength < 8){
    window.alert("Not enough characters!");
  }
  else{
    window.alert("Too many characters!");
  }

 // window.location.reload();
}

//generates random lower case letter
function randomLower(){
  if(confirm("Do you want lowercase letters?")){
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    return lowerCase [Math.floor(Math.random() * lowerCase.length)];       
  }
}

//generates random upper case letter
function randomUpper(){
  if(confirm("Do you want uppercase letters?")){
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return upperCase [Math.floor(Math.random() * upperCase.length)];
  }
}

//generates random number
function randomNumber(){
  if(confirm("Do you want random numbers?")){
    const num = "0123456789";
    return num [Math.floor(Math.random() * num.length)];
  }
}
//generates random symbol
function randomSymbol(){
  if(confirm("Do you want random symbols?")){
    const symbols = "!@#$%*?+_-&"
    return symbols [Math.floor(Math.random() * symbols.length)];
  }
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
