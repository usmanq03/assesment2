//Sort number in ascending or descending order

let arrExample = [2, 5, 1, 4, 7, 9, 6]
let arrExample2 = [2, 5, 1, 4, 7, 9, 6]

function ascendingNumbers(arr){
  //use bubble sort to sort array
  const n = arr.length
  for(let i=0; i<n-1; i++){
    for(let j = 0; j<n-i -1; j++){
      if(arr[j]>arr[j+1]){
        const temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp;
      }
    }
  }
  return arr
}

function descendingNumbers(arr){
  const n = arr.length
  for(let i = 0; i<n-1; i++){
    for(let j = 0; j<n-i-1; j++){
      if(arr[j]<arr[j+1]){
        const temp = arr[j]
        arr[j]=arr[j+1]
        arr[j+1]=temp
      }
    }
  }
  return arr
}

const newArray = ascendingNumbers(arrExample)
console.log(newArray)

const newArrayTwo = descendingNumbers(arrExample2)
console.log(newArrayTwo)