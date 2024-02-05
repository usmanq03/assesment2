//Calculate sum of all numbers from 1 to a given number
let userEnterNum = window.prompt(`Enter a number : `)
userEnterNum = Number(userEnterNum)
let summationValue = 0;

for(let i=1; i<=userEnterNum; i++){
    summationValue += i;
}

console.log(`summation of all the numbers added together from 1 to ${userEnterNum} = ${summationValue}`)