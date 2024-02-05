//find largest number in an array

function largestNumFinder (arr){
  let largestNum = 0
  for(let i = 0; i<arr.length-1; i++){
    if(largestNum < arr[i]){
      largestNum = arr[i]
    }
    if (largestNum < arr[i+1]){
      largestNum = arr[i+1]
    }

  }
  return largestNum
}

const arryOfNumbers = [2, 9, 1, 700, 0, 8, 900, 13, 100, 200]
console.log(largestNumFinder(arryOfNumbers))