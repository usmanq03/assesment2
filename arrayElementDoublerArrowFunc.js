//Double Each Element in an array use Arrow Function
// create a duplicate value of each element in an array

const elementDoubler = arr =>{ //using arrow function with arr as the parameter
  const n = arr.length
  const newArray = []
  if(n>0){
    for(let i = 0; i<n; i++){
      newArray.push(arr[i], arr[i])
    }

  }else{
    newArray.push(arr[0])
  }
  return newArray
}

let arrOne = [1, 'usman', 2, 'qamar']
console.log(elementDoubler(arrOne))