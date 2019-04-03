let myData = null

fetch('https://api.github.com/users/mirandamon')
.then( (data) => {return data.json()} )
.then( (json) => {myData = json} )

// function onFetch (data) {
  
// }

console.log(myData)
// Javascript Object Notation

// synchronous vs asynchronous 

// one at a time in order = synchronous
// hands would be tied for any long operation/unknown duration

// asynchronous code is a way to do multiple things at once and react to them whenever they finish