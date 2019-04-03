// let tacosAvailable = 3 
// let weather = 'sunny'

// // if the weather is good (meaning it is sunny) and there are more than 0 tacos available we want to do something
// if (weather === 'sunny' && tacosAvailable > 0) {
//   // if there are 2 tacos available, alert with a message saying there's 2 left
//   // otherwise say, only one left!!
//   // nesting if statement - put ifs inside of other ifs
//   // chaining combining multiple if statements before the else
  
//   if (tacosAvailable < 2) {
//     alert("there's 2 left!")
//   } else if (tacosAvailable > 5) {
//       alert('5 omg')
//   } else {
//     alert('1 left')
//   }
// }

// what if i want to check if the weather is sunny multiple times

// make code reusable
// parameter for the function
// function checkIfWeatherIsSunny(currentWeather) {
//   if (currentWeather === 'sunny') {
    
//   }
// }

// checkIfWeatherIsSunny('rain')
// checkIfWeatherIsSunny('snow')
// checkIfWeatherIsSunny('thunderstorm')


function fiftyDiscountPrice(nonDiscountedPrice) {
  return nonDiscountedPrice / 2
}
// returns are used to save results outside of functions


function makeANumberAPrice(someNumber) {
  console.log('$' + someNumber + '.00')
}

const price = 20
// 20 => 10
const discountedPrice = fiftyDiscountPrice(price)

// $10.00 
makeANumberAPrice(discountedPrice)








// function checkIfEnoughTacos(amountOfTacos) {
//   if (amountOfTacos < 4) {
//     // do something
//     return true
//   }
// }

