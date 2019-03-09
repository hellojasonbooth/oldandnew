

// logo follows cursor in footer
const sublogoTags = document.querySelectorAll('div.sublogo div')

const footerAreaTag = document.querySelector('footer.contactpage-footer')


let w = footerAreaTag.clientWidth
let h = footerAreaTag.clientHeight


sublogoTags.forEach(tag => {
  let mouseX = w / 2
  let mouseY = h / 2
  
  let logoX = w / 2
  let logoY = h / 2

  let speed = parseFloat(tag.getAttribute("data-speed"))

  function animate() {
    let distX = mouseX - logoX
    let distY = mouseY - logoY

    logoX = logoX + (distX * speed)
    logoY = logoY + (distY * speed)


    tag.style.left = logoX + 'px'
    tag.style.top = logoY + 'px'

    requestAnimationFrame(animate)
  }

  animate()
  
    
  footerAreaTag.addEventListener("mousemove", function () { 
   	mouseX = event.pageX
    mouseY = event.pageY
  })

  document.addEventListener("scroll", function () { 
    mouseX = event.pageX
    mouseY = event.pageY
})
  
  
  const handleResize = function () {
    
    w = footerAreaTag.clientWidth
	h = footerAreaTag.clientHeight
    
    logoX = w / 2
    logoY = h / 2
    
    mouseX = w / 2
    mouseY = h / 2
}
  
  
footerAreaTag.addEventListener("mouseleave", function () {
   	mouseX = w / 2
  	mouseY = h / 2
  })
  
 
 window.addEventListener('resize', handleResize)
 

})

