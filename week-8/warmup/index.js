// 1. find the elements

const subtract = document.getElementById('subtract')
const add = document.getElementById('add')
const total = document.getElementById('total')

// 2. fill in the event listeners

subtract.addEventListener('click', () => {
  // <div>asdfasdf </div>
  const currentNumber = total.innerHTML
  if (currentNumber >= 1) {
    const newNumber = currentNumber - 1
    total.innerHTML = newNumber
  }
  
  // <span>0</span>
})
add.addEventListener('click', () => {
  const currentNumber = parseInt(total.innerHTML)
  
  const newNumber = currentNumber + 1
  
  total.innerHTML = newNumber
})