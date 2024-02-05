let userEnterNum1 = window.prompt(`Please enter the first number :`)
let userEnterNum2 = window.prompt(`Please enter a second number: `)

userEnterNum1 = Number(userEnterNum1)
userEnterNum2 = Number(userEnterNum2)

if(userEnterNum1 > userEnterNum2){
    console.log(`${userEnterNum1} is greater than ${userEnterNum2}`)
}else if(userEnterNum1 === userEnterNum2){
    console.log(`${userEnterNum1} and ${userEnterNum2} are both equal`)
}else{
    console.log(`${userEnterNum2} is greater than ${userEnterNum1}`)
}