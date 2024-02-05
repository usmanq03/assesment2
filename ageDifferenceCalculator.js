//Calculate the age difference between two people

let person1 = 28
let person2 = 40

const ageDifference = function(age1, age2){
  
  let difference = 0
  if(age1 >= age2){
    difference = age1 - age2
  }else{
    difference = age2 - age1
  }
  return difference
}

const differenceCalculated = ageDifference(person1, person2)
console.log(differenceCalculated)