
const areaTag = document.querySelector('div.menu-area')


const menuBallTag = areaTag.querySelector('div.menu-ball')
  // CODE RELATED TO EACH SECTION HERE
  
  
  let mouseX = areaTag.offsetLeft + (areaTag.clientWidth / 2)
  let mouseY = areaTag.offsetTop + (areaTag.clientHeight / 2)
  
  let ballX = areaTag.offsetLeft + (areaTag.clientWidth / 2)
  let ballY = areaTag.offsetTop + (areaTag.clientHeight / 2)
  
  
  areaTag.addEventListener("mousemove", function (event) {
   	mouseX = event.clientX
    mouseY = event.clientY
    
  })
  
  areaTag.addEventListener("mouseleave", function () {
   	mouseX = areaTag.offsetLeft + (areaTag.clientWidth / 2)
  	mouseY = areaTag.offsetTop + (areaTag.clientHeight / 2)
  })
  
  const handleResize = function () {
   
    
    ballX = areaTag.offsetLeft + (areaTag.clientWidth / 2)
    ballY = areaTag.offsetTop + (areaTag.clientHeight / 2)
    
    mouseX = areaTag.offsetLeft + (areaTag.clientWidth / 2)
    mouseY = areaTag.offsetTop + (areaTag.clientHeight / 2)
	}
  
  window.addEventListener('resize', handleResize)
  
  
    // code related for each ball here

  	let speed = 0.2

  	function animate() {
    	let distX = mouseX - ballX
    	let distY = mouseY - ballY

    	ballX = ballX + (distX * speed)
    	ballY = ballY + (distY * speed)

			menuBallTag.style.left = (ballX - areaTag.offsetLeft) + 'px'
			menuBallTag.style.top = ballY + 'px'

    	requestAnimationFrame(animate)
  	}

  animate()
  


