

// menu ball is tracked by the mouse

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






// menu opens and burger is animated

const menuTag = document.querySelector('div.menu')

const burgerOneTag = document.querySelector('div.burger1')
const burgerTwoTag = document.querySelector('div.burger2')


menuBallTag.addEventListener('click', function () {
  menuTag.classList.toggle('open')
  
  if (menuTag.classList.contains('open')) {
    burgerOneTag.style.transform = 'translateY(3px) rotate(-45deg)'
    burgerTwoTag.style.transform = 'translateY(-3px) rotate(45deg)'
  } else {
    burgerOneTag.style.transform = ''
    burgerTwoTag.style.transform = ''
  }


  if (menuTag.classList.contains('open')) {
    instaTag.classList.remove('white')
  } else {
    instaTag.classList.add('white')
  }
  
})






// menu items parallax

const navAreas = document.querySelectorAll('div div.nav-area--wrap')


navAreas.forEach(navArea => {
  const navTags = navArea.querySelectorAll('div')
  // CODE RELATED TO EACH SECTION HERE
  
  
  let mouseX = navArea.offsetLeft + (navArea.clientWidth / 2)
  let mouseY = navArea.offsetTop + (navArea.clientHeight / 2)
  
  let navItemX = navArea.offsetLeft + (navArea.clientWidth / 2)
  let navItemY = navArea.offsetTop + (navArea.clientHeight / 2)
  
  
  navArea.addEventListener("mousemove", function (event) {
   	mouseX = event.clientX
    mouseY = event.clientY
    
  })
  
  navArea.addEventListener("mouseleave", function () {
   	mouseX = navArea.offsetLeft + (navArea.clientWidth / 2)
  	mouseY = navArea.offsetTop + (navArea.clientHeight / 2)
  })
  
  const handleResize = function () {
    navItemX = navArea.offsetLeft + (navArea.clientWidth / 2)
    navItemY = navArea.offsetTop + (navArea.clientHeight / 2)
    
    mouseX = navArea.offsetLeft + (navArea.clientWidth / 2)
    mouseY = navArea.offsetTop + (navArea.clientHeight / 2)
	}
  
  window.addEventListener('resize', handleResize)
  
  
  navTags.forEach(navTag => {
    // code related for each ball here

  	let speed = parseFloat(navTag.getAttribute("data-speed"))

  	function animate() {
    	let distX = mouseX - navItemX
    	let distY = mouseY - navItemY

    	navItemX = navItemX + (distX * speed)
    	navItemY = navItemY + (distY * speed)

      navTag.style.left = navItemX + 'px'
      
      navTag.style.top = (navItemY - navArea.offsetTop) + 'px'

    	requestAnimationFrame(animate)
  	}

  animate()
  })
  
})




