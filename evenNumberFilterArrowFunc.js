// Even number filter from an Array using arrow function

const evenNumFilter = arr =>{
  const newArray = []
  for(i=0; i<arr.length; i++){
    //check if number is even
    // if(arr[i] % 2 === 0){
    //   newArray.push(arr[i])
    // }
    //user ternary operator
    arr[i] % 2 ===0 ? newArray.push(arr[i]) : console.log(`Number: ${arr[i]} was ignored it is not an even number`)
  }
  return newArray
}

let arrayStart = [2, 5, 8, 9, 3, 5]
arrayStart = evenNumFilter(arrayStart)
console.log(arrayStart)