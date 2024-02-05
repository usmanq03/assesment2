let userEnterNum = window.prompt(`Please enter a positive number :`)
userEnterNum = Number(userEnterNum)
console.log('Countdown Begins')
for(let i = userEnterNum; i>=1; i--){
    console.log(i)
}