 // Assignment code here
document.getElementById("generate").addEventListener("click",writePassword())

function generatePassword(){
  makePassword();
}

function makePassword(){
  passwordLength();
  randomLower();
  randomUpper();

  var passwordHolder = ' ';
  
  for (let index = 0; index < passwordLength ; index++) {
    if(randomLower() == true){
      passwordHolder.append(randomLower());
    }
  
    if(randomUpper() == true){
      passwordHolder.append(randomUpper());
    }
  }
  console.log(passwordHolder);

}

//takes in the length that the user wants and does the password generation
function passwordLength() {
  const passwordLength = prompt("How long do you want your password to be? (Has to be more than 8 characters and no more than 128)");

  if(passwordLength > 8 && passwordLength <= 128 ) {
      
  }
  else if(passwordLength < 8){
    window.alert("Not enough characters!");
  }
  else{
    window.alert("Too many characters!");
  }

  return passwordLength;

}


//generates random lower case letter
function randomLower(){
  if(confirm("Do you want lowercase letters?") == true){
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    return lowerCase [Math.floor(Math.random() * lowerCase.length)];      
  }
  else{
    return;
  }
}

//generates random upper case letter
function randomUpper(){
  if(confirm("Do you want uppercase letters?") == true){
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return upperCase [Math.floor(Math.random() * upperCase.length)];
  }
  else{
    return;
  }
} 

//generates random number
function randomNumber(){
  if(confirm("Do you want random numbers?") == true){
    const num = "0123456789";
    return num [Math.floor(Math.random() * num.length)];
  }
  else{
    return;
  }
}

//generates random symbol
function randomSymbol(){
  if(confirm("Do you want random symbols?") == true){
    const symbols = "!@#$%*?+_-&"
    return symbols [Math.floor(Math.random() * symbols.length)];
  }
  else{
    return;
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
