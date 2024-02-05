let userEnteredMessage = window.prompt(`Please enter a string character and will check if it a vowel or consonat :`)
const vowels =[`a`, `e`, `i`, `o`, `u`]

if(userEnteredMessage === vowels[0] || userEnteredMessage === vowels[1] || userEnteredMessage === vowels[2] || userEnteredMessage=== vowels[3] || userEnteredMessage === vowels[4]){
    console.log(`${userEnteredMessage} is a vowel`)
} else{
    console.log(`${userEnteredMessage} is not a vowel`)
}
