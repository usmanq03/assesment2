let userEnteredNumber = window.prompt(`Please enter a number : `)
userEnteredNumber = Number(userEnteredNumber)
if(userEnteredNumber % 2 === 0){
    console.log(`${userEnteredNumber} is a even number`)
}else{
    console.log(`${userEnteredNumber} is a odd number`)
}
