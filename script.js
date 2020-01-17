var numericCharacters = "0123456789";
var lowerCharacters = "abcdefghijklmnopqrstuvwyz";
var upperCharacters = "ABCDEFGHLMNOPQRSTUVWXYZ";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


var password = '';
var available = ''; 

var generateBtn = document.querySelector("#generate");
var button = document.querySelector("#generate");

button.addEventListener("click", promptUser)

function promptUser(){
var length = prompt('How many characters should your password be (8-128) ?')
var isNumeric = confirm('Do you want numeric characters?');
var isUpper = confirm('Do you want uppercase letters?');
var isLower = confirm('Do you want lowercase letters?');
var isSpecial = confirm('Do you want special characters?');
   
 var textArea = document.getElementById("password");

  textArea.innerHTML = password;

if (isNumeric == true) {
    available += numericCharacters;
}

if (isLower == true) {
    available += lowerCharacters;
  }
  
if (isUpper == true) {
    available += upperCharacters;
  }

if (isSpecial == true) {
    available += specialCharacters;
  }

 for ( var i = 0; i < length; i++ ) {
     console.log(available);
    
    document.getElementById("password").innerHTML = available;
    }
}

function copyPassword(){
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard");
}