// Assignment Code
var generateBtn = document.querySelector("#generate");
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
var passwordArray= [];

function generatePassword() {
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
  }else{//(numberOfcharacters === "" || numberOfCharacters === null){
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
      return promptNumbers;
    }else{
      alert("please make a valid selection");
      desiredNumbers();
    }

        //function to use special numbers
        var specialNum =function(){
          //ask the user if they want special characters
          var promptSpecCharacters= prompt("Would you like to use special characters? Please input 1 for Yes and 2 for No");
            if(promptSpecCharacters === 1){
              alert("You have chosen to include Special characters in your password");
              return promptSpecCharacters;
            }else if(promptSpecCharacters === 2){
              alert("You have chosen to not include Special characters");
              return promptSpecCharacters;
            }else{
              alert("Please make a valid choice");
              specialNum();
            }
            return promptSpecCharacters;
        }
// function for upperCase
        var upperCase = function(){
          //ask the user if they want uppercase letters
        var promptUpperCase= prompt("Would you like to use uppercase letters? Please choose 1 for yes, and 2 for No");
          if(promptUpperCase === 1){
            alert("You have chosen to include Upper Case Letters");
            return promptUpperCase;
          }else if(promptUserCase === 2){
            alert("You have chosen to not include Upper Case Letters");
            return promptUpperCase;
          }else{
            alert("Please make a valid choice");
            upperCase();
          }
          return promptUpperCase;
       }

       //lower Case function
       var lowerCase = function(){
        //ask the user if they want lower case letters
       var promptLowerCase= prompt("Would you like to use lowercase letters? Please use '1' for Yes and '2' for No");
         if(promptLowerCase === 1){
           alert("You have chosen to include lower case letters in your password");
           lowerCase();
         }else if(promptLowerCase ===2){
           alert("You have chosen not to use lower case letters");
         }else{
           alert("You have chosen not to include lower case letters");
         }
      }
     

  if(desiredNumbers === 1 && specialNum === 1 && upperCase === 1 && lowerCase ===1 ){
    characterArray= specialCharacters.concat[alphabet, arrayNumbers, alphabetUpper];
  }else if(desiredNumbers === 1 && specialNum === 1 && upperCase === 1){
    characterArray= specialCharacters.concat[alphabetUpper, arrayNumbers];
  }else if(desiredNumbers ==1 && specialNum === 1 && lowerCase ===1){
    characterArray = specialCharacters.concat[alphabet, arrayNumbers];
  }else if(specialNum ==1 && lowerCase ==1 && upperCase ==1){
    characterArray = specialCharacters.concat[alphabet, alphabetUpper];
  }else if(desiredNumbers ==1 && lowerCase ==1 && upperCase ==1){
    characterArray = arrayNumbers.concat[alphabet, alphabetUpper];
  }else if(desiredNumbers ==1 && specialNum==1 && lowerCase ==1){
    characterArray = specialCharacters.concat[alphabet,arrayNumbers];
  }else if(desiredNumbers ==1 && specialNum ==1 && upperCase==1){
    characterArray = specialCharacters.concat[alphabetUpper,arrayNumbers];
  }else if(desiredNum ==1 && specialNum ==1){
    characterArray = specialCharacters.concat[arrayNumbers];
  }else if(desiredNum==1 && upperCase ==1){
    characterArray = arrayNumbers.concat[alphabetUpper];
  }else if(desiredNum==1 && lowerCase){
    characterArray = arrayNumbers.concat[alphabet];
  }else if(specialNum ==1 && lowerCase){
    characterArray = specialCharacters.concat[alphabet];
  }else if(specialNum ==1 && upperCase){
    characterArray = specialCharacters.concat[alphabetUpper];
  }else if(specialNum ==1 && desiredNumber ==1){
    characterArray = specialCharacters.concat[arrayNumbers];
  }else if(lowerCase== 1 && upperCase ==1){
    characterArray = alphabetUpper.concat[alphabet];
  }else if(specialNum ==1){
    //dont thing this is the right way to add the array into the character array
    characterArray += specialCharacters;
  }else if(lowerCase ==1){
    //dont thing this is the right way to add the array into the character array
    characterArray += alphabet;
  }else if(upperCase ==1){
    //dont thing this is the right way to add the array into the character array
    characterArray += alphabetUpper;
  }else{
    //dont thing this is the right way to add the array into the character array
    characterArray += desiredNum;
  }

  
  for(var=i; i<numberOfCharacters.length; i++){
    password += characterArray(Math.floor(Math.random()* characterArray.length));
  }
  return password;
  
  
  //generate the password
  //repeat based on number of desired characters
  //add random character from character array to password
  //return the password
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
//Do the arrays have to be inside of the function?
//Not sure how to get the prompts to work, or call back on it
//Not sure how to append - if using concat to fuse array if something was good how do you ensure it gets reset
