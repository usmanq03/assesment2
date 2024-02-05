//keep prompting the user for a password until it meets criteria (length, complexity)

//check for length make sure it is between 12 - 16 characters
//check for complexity: make sure it includes lower and uppercase as well as a character

let password;

while(true){
  password = window.prompt("Enter a password (12 - 16 character, including lower and uppercasem, and atleast one special character)")

  //check length
  if(password.length < 12 || password.length>16){
    console.log("Password must be between 12 and 16 characters")
    continue;
  }

  //check complexity
  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
  const hasSpecialCharacter = /[!@#$%^&_?-]/.test(password)

  if(!hasUpperCase || !hasLowerCase || !hasSpecialCharacter){
    console.log("Password must include atleast one uppercase one lowercase and one special character")
    continue;
  }

  // if the password meets criteria, break out of the loop
  break;
  
}

console.log("Password accepted !")