// Assignment Code
var generateBtn = document.querySelector("#generate");
// array of special characters
var specialCharacters = ['!', '@', '#', '$', '%', '&', '~','^','*'];

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

  characterArray=[];
  characters= numCharacter();
  desiredNumbers();
  specialNum();
  lowerCase();
  upperCase();
// random for loop to generate password
//add random character from character array to password
  var password= "";
  for(i=0; i<characters; i++){
    var index = Math.floor(Math.random()* characterArray.length);
    password += characterArray[index];
    
 }
 console.log(password);
  return password;

}

//Make a function to add characters to password
function numCharacter() {
 var nums = parseInt(prompt("How many characters would you like? Pick a number between 8 and 128"), 10);
 console.log(nums);
 //NaN is used because we turned it into an integer
 if(nums < 8 || isNaN(nums)){
   alert("You selected below 8 characters?");
   numCharacter();
 }else if(nums > 128 || isNaN(nums)){
   alert("You selected over 128");
   numCharacter();
 }else{
   return nums;
 }
}

function desiredNumbers () {
    var promptNumbers = confirm("Would you like to use numbers for your password?");
    if(promptNumbers){
      alert("You chose to include numbers in your password");
      characterArray= characterArray.concat(arrayNumbers);
      console.log(characterArray);
      //how do I append to passwor?
    }else if(!promptNumbers){
      alert("You chose to not include numbers in your password");
      console.log(characterArray);
      
    }
  }

        //function to use special numbers
function specialNum (){
          //ask the user if they want special characters
          var promptSpecCharacters= confirm("Would you like to use special characters?");
            if(promptSpecCharacters ){
              alert("You have chosen to include Special characters in your password");
              characterArray= characterArray.concat(specialCharacters);
              console.log(characterArray);
            }else if(!promptSpecCharacters){
              alert("You have chosen to not include Special characters");
              console.log(characterArray);
              
            }
           
        }
      
// function for upperCase
function upperCase(){
          //ask the user if they want uppercase letters
        var promptUpperCase= confirm("Would you like to use uppercase letters?");
          if(promptUpperCase){
            alert("You have chosen to include Upper Case Letters");
            //appending to the array
            characterArray=characterArray.concat(alphabetUpper);
            console.log(characterArray);
          }else if(!promptUserCase){
            alert("You have chosen to not include Upper Case Letters");
            console.log(characterArray);
            
          }
       
       }
       //lower Case function
function lowerCase(){
        //ask the user if they want lower case letters
       var promptLowerCase= confirm("Would you like to use lowercase letters?");
         if(promptLowerCase){
           alert("You have chosen to include lower case letters in your password");
           //appending lowerCase to the array
           characterArray=characterArray.concat(alphabet);
           console.log(characterArray);
         }else if(!promptLowerCase){
           alert("You have chosen not to use lower case letters");
           console.log(characterArray);
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

