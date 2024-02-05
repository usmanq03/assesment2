//String Concatenation: Combine Two strings into a single string

// arrow function
const combineStr = (strOne, strTwo) =>{
  //const combination = strOne + " " + strTwo
  const combination =`The two strings combine are: ${strOne} ${strTwo}` //using template litterals
  return combination
}

const stringOne = "hello"
const stringTwo = "world"
console.log(combineStr(stringOne, stringTwo))