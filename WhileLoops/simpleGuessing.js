//simple guessing game: generate a random number and let the user guess  it within a limited number of tries

//generate a random number
const randoNum = Math.round(Math.random()* 50)


let userNum
let i = 0;
while(i < 3){
  userNum = window.prompt(`You will get 3 tries to guess number between 1 - 50 try number ${i} :`)
  userNum = Number(userNum)
  userNum === randoNum ? console.log(`You guessed the right number yay`) : console.log(`you guessed the wrong number`)
  i++
}

if(userNum != randoNum){
console.log(`Sorry your three tries are up the actual number is ${randoNum}`)
}