let ageEligibilityCheck = window.prompt("Enter your age :")
ageEligibilityCheck = Number(ageEligibilityCheck)

switch(true){
  case ageEligibilityCheck <= 0:
    console.log('Invalid number entered must be greater than 0')
    break
  case (ageEligibilityCheck >0 && ageEligibilityCheck< 18):
    console.log(`You are not able to vote based on age. Minimum age is 18`)
    break
  case ageEligibilityCheck >=18:
    console.log(`You are of age and able to vote Congrats`)
    break
}