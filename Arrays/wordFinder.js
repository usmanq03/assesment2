//check if a word exists in an array of words

const sampleArray = ["usman", "Qamar", "Rubina"]
const lookFor = "qamar"
function findWord(arr){
  for(let word of arr){
    if(word.toLowerCase()===lookFor.toLowerCase()){
      return true;
    }
  }
  return false; //element not found after searching the entire array
}

console.log(findWord(sampleArray))

