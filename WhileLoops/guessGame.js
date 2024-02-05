const num = 7
let guessNum
//guessing with while loop
do{
  guessNum = window.prompt(`Please guess the correct number :`)
  guessNum = Number(guessNum)
}while(guessNum != num);

guessNum === num ? console.log(`you guessed the correct number`):console.log(``)