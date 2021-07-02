// Assignment Code
var generateBtn = document.querySelector("#generate");
//creation of all arrays
 // array of special characters
 var specialCharacters = ['!', '@', '#', '$', '%', '&'];
 // array of numbers
 var arrayNumbers = [ 0,1, 2 ,3 ,4,5, 6, 7, 8 ,9 ];
 // array of lower case letters

 var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

 // array of upper case letters
 var alphabetUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 
 //empty array of characters
 var  characterArray =[];

function generatePassword() {

  //ask the user if they want numbers
  var promptNumbers = prompt("Would you like to use numbers for your password?");
  //ask the user if they want special characters
  var promptSpecCharacters= prompt("Would you like to use special characters?");
  //ask the user if they want uppercase letters
  var promptUpperCase= prompt("Would you like to use uppercase letters?");
  //ask the user if they want lower case letters
  var promptLowerCase= prompt("Would you like to use lowercase letters?");
  // if numbers, append numbers to character array
  // if sc, append special characters to character array
  // if ul, append upper case letetrs to characters array
  // if ll, append lowercase letters
  //generate the password
  //repeat based on number of desired characters
  //add random character from character array to password
  //return the password
}


//Make a function to add characters to password
var numCharacter = function() {
  //ask user how many characters they would like to have
  var numberOfCharacters = prompt('How many characters would you like to use?');
  if(numberOfCharacters < 8){
    alert("The Password needs to be more then 8 characters");
    numCharacter;
  }else if(numberOfCharacters >128){
    alert("The Number of characters cannot exceed 128");
    numCharacter;
  }else(numberOfcharacters === "" || numberOfCharacters === null){
    alert("You need to provide a number of Characters between 8 and 128");
    numCharacter;
  }
  return numberOfCharacters;
}
  var desiredNumbers = function() {
    var promptNumbers = prompt("Would you like to use numbers for your password? Please enter 1 for Yes and 2 for No");
    if(promptNumbers === 1){
      alert("You chose to include numbers in your password");
      //how do I append to passwor?
    }else if(promptNumbers === 2){
      alert("You chose to not include numbers in your password");
    }else{
      alert("please make a valid selection");
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

//whats the difference of using var or const for arrayNumbers
//Do I have to use another array for uppercase. or can I just used .toUpperCase?
//Do the arrays have to be inside of the function?