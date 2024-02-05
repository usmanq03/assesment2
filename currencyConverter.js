//Convert between 2 currencies

const currencyProvided = window.prompt(`Please enter currency in Dollar to be converted to Euro: `)

const currencyConversion= function(currency){
  //Method for converting currency
  //for every dollar you get .92 in euro

  const dollarToEuro = currency * .92
  return dollarToEuro

}

const convertedToEuro = currencyConversion(currencyProvided)

//format result for display
const formattedAmount = convertedToEuro.toLocaleString('en-US', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})
console.log(formattedAmount)