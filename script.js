// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  //condition t nae ho
  //readme

  let password = "";
  let randpassword = [];
  let userinput = prompt("length of at least 8 characters and no more than 128 characters");//userinput>

  if(userinput >= 8 && userinput <= 128 || Number.isInteger(userinput) )
      { let lowerCase = confirm("do you want to include lowercase?");//condition t or F
        let upperCase = confirm("do you want to include Uppercase?");
        let numeric = confirm("do you want to include numeric?");
        let Special = confirm("do you want to include Special Character?");

               
  function randloAlpha(){//random index
    const loAlpha = "abcdefghijklmnopqrstuvwxyz" ;
    return loAlpha[Math.floor(Math.random()*loAlpha.length)]
  };
  function randupAlpha(){
    const upAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
    return upAlpha[Math.floor(Math.random()*upAlpha.length)]
  };
  function randNuAlpha(){
    const NuAlpha = "0123456789" ;
    return NuAlpha[Math.floor(Math.random()*NuAlpha.length)]
  };
  function randSCAlpha(){
    const SCAlpha = "!@#$%^&*_-+=" ;
    return SCAlpha[Math.floor(Math.random()*SCAlpha.length)]
  };

  

  if(lowerCase){//push to array 
    randpassword.push(randloAlpha);
  }
  if(upperCase){
    randpassword.push(randupAlpha);
  }
  if(numeric){
    randpassword.push(randNuAlpha);
  }
  if(Special){
    randpassword.push(randSCAlpha);
  }

if(lowerCase || upperCase || numeric || Special)
{
  for(let i=0;i<userinput;i++){//loop to length
    password += randpassword[Math.floor(Math.random()*randpassword.length)]();
  }

}
  return password;//return string
  }
  else {
      alert("Not a valid input ")
       }
 
 
 }// Add event listener to generate button



generateBtn.addEventListener("click", writePassword);
