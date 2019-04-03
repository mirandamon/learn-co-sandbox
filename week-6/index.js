// <div>red</div>
// <div>orange</div>

function makeColorfulDiv(color) {
  // 1. make a div
let newDiv = document.createElement('div')
// red = <div></div>
// 2. <div>red</div>
if (color === 'red' || color === 'orange') {
  newDiv.innerHTML = color + ' color'  
} else {
  newDiv.innerHTML = color
} 


// 3. div's background color is red
// <div style="background-color: red">
newDiv.style.backgroundColor = color
// 4. <div id="colors"> <div> red </div> </div>

// 1. find #colors div
const colors = document.getElementById('colors')
// 2. Append the child to the #colors div
colors.appendChild(newDiv)
}


makeColorfulDiv('red')



makeColorfulDiv('orange')





makeColorfulDiv('yellow')
makeColorfulDiv('green')
makeColorfulDiv('blue')
makeColorfulDiv('indigo')
makeColorfulDiv('purple')
makeColorfulDiv('cadetblue')
makeColorfulDiv('mistyrose')
makeColorfulDiv('goldenrod')






