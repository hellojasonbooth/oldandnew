



//html setup
const shape = document.getElementsByClassName('parallax-title')
const shapesArray = Array.from(shape)
  
// input setup
const input = {
  mouseX: {
    start: 0,
    end: window.innerWidth,
    current: 0,
  },
  mouseY: {
    start: 0,
    end: window.innerHeight,
    current: 0,
  }
}
input.mouseX.range = input.mouseX.end - input.mouseX.start
input.mouseY.range = input.mouseY.end - input.mouseY.start


// output setup
const output = {
  x: {
    start: -50,
    end: 50,
    current: 0,
  },
  y: {
    start: -50,
    end: 50,
    current: 0,
  },
}
output.x.range = output.x.end - output.x.start
output.y.range = output.y.end - output.y.start

const mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2
}

const updateInputs = function () {
  // mouse x input
  input.mouseX.current = mouse.x
  input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range
  // mouse y input
  input.mouseY.current = mouse.y
  input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range
}

const updateOutputs = function () {
  // output x and y
  output.x.current = output.x.start + (input.mouseX.fraction * output.x.range)
  output.y.current = output.y.start + (input.mouseY.fraction * output.y.range)
}

const updateParallaxItems = function () {
  // apply to html
  shapesArray.forEach(shape => {
    shape.style.transform = `translate(${output.x.current}px, ${output.y.current}px)`
  })  
}

const handleMouseMove = function (event) {
  mouse.x = event.clientX
  mouse.y = event.clientY
  
  updateInputs()
  updateOutputs()
  updateParallaxItems() 
}

const handleWindowResize = function (event) {
  input.mouseX.end = window.innerWidth
  input.mouseX.range = input.mouseX.end - input.mouseX.start
  
  input.mouseY.end = window.innerHeight
  input.mouseY.range = input.mouseY.end - input.mouseY.start
}



window.addEventListener('mousemove', handleMouseMove)
window.addEventListener('resize', handleWindowResize)

updateInputs()
updateOutputs()
updateParallaxItems() 