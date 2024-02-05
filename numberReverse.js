// Number Reverse : Reverse the digits of a given number

//1st step get number
let numberReceived = window.prompt(`Please enter a positive number more than 2 digits :`)
numberReceived = numberReceived.split('').reverse().join('')
console.log(numberReceived)