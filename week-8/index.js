// Events have two parts
// 1. find the element that you need
// you can skip step 1 

// document.querySelector('#click-me')

const button = document.getElementById('click-me')


// function onClick() {}

// 2. add the event listener to the thing you care about
// -- what kind of event is it that we're listening for
// -- what should be triggered when the event happens
button.addEventListener('click', () => {
  console.log('hell ya')
})
// document.addEventListener('click')



              // 0 1 2  3  4
const myArray = [4, 3, 4]


// Non-Destructive
const myArrayCopy = myArray.slice()
myArrayCopy.push(3)

console.log(myArray)
console.log(myArrayCopy)

/*
Destructive

pop() - deletes from the end
push(someItem) - adds to the end 

shift() - deletes from the beginning
unshift(someItem) - adds to the beginning
*/









// anonymous functions (arrow functions) are good for functions that you don't think you're going to reuse