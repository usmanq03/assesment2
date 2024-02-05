// sort an array of numbers in ascending

//declare array first
const myArray = [0, 10, 9, 5, 20, 3, 40, 1, 3, 4, 2]

//function that takes in the array and sorts it in ascending order
const ascendingArray = function (arr){
  const n = arr.length //7

  for(let i = 0; i<n-1; i++){
    for(let j = 0; j<n-i-1; j++){
      if(arr[j]>arr[j+1]){ 
        const temp = arr[j]
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr
}

//function that takes in the aray and sorts it in descending order
const descendingArray = function (arr){
  const n = arr.length

  for(let i = n-1; i>=0; i--){
    for(let j = n-1; j>=0; j--){
      if(arr[j]>arr[j-1]){
        const temp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = temp
      }
    }
  }
  return arr
}

const sortedNumbers = ascendingArray(myArray.slice())
console.log(sortedNumbers)

const descendingSortedNumbers = descendingArray(myArray.slice())
console.log(descendingSortedNumbers)

console.log(myArray)