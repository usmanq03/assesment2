//Determine if a given word or phrase is a palindrome

function isPalindrom(str){
    //remove non string
    const cleanStr = str.replace(/[^a-zA-Z]/g, '').toLowerCase()
    console.log(cleanStr)
    //compare original to reversed string
    const reversedStr = cleanStr.split('').reverse().join('')
    console.log(reversedStr)
    return cleanStr === reversedStr;
}

const word = "rada9r"
const phrase = "A man, a plan, a canal, Panama";

console.log(isPalindrom(word))
console.log(isPalindrom(phrase))

//Reverse Function

function myReverse(){

    const length = this.length
    const middle = Math.floor(length/2)

    for(let i = 0; i<middle; i++){
        //swap elements
        const temp = this [i]
        this[i] = this[length - 1 - i]
        this[length - 1 - i] = temp
    }
}