//Temp converter: Celsius and Farenheit

//Formula for celsius to farenheit
const temp = window.prompt(`Please enter number in clesius degrees to be converted: `)
const tempConversion = function(temp){
  const farenheit = (temp * 1.8)+32
  return farenheit
}

let convertedTemp =tempConversion(temp)
console.log(convertedTemp5)