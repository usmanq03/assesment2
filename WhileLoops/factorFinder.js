//find all factors of a given number

const num = 9

//factor finder with while loop

let i = 1
const factors = Math.floor(num/2)
console.log(factors)
while(i<= factors){
  if(num % i === 0){
    console.log(`factor found : ${i}`)
  }
  i++
}