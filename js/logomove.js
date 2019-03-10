



const footerAreaTag = document.querySelector('footer.contactpage-footer')

const logoTags = footerAreaTag.querySelectorAll('footer div.logo-wrap div')

let cursorX = footerAreaTag.offsetLeft + (footerAreaTag.clientWidth / 2)
let cursorY = footerAreaTag.offsetTop + (footerAreaTag.clientHeight / 2)

let logoX = footerAreaTag.offsetLeft + (footerAreaTag.clientWidth / 2)
let logoY = footerAreaTag.offsetTop + (footerAreaTag.clientHeight / 2)


footerAreaTag.addEventListener("mousemove", function (event) {
  cursorX = event.clientX
  cursorY = event.clientY
})
  
footerAreaTag.addEventListener("mouseleave", function () {
  cursorX = footerAreaTag.offsetLeft + (footerAreaTag.clientWidth / 2)
  cursorY = footerAreaTag.offsetTop + (footerAreaTag.clientHeight / 2)
})
  
const handleResizeFooter = function () {


  logoX = footerAreaTag.offsetLeft + (footerAreaTag.clientWidth / 2)
  logoY = footerAreaTag.offsetTop + (footerAreaTag.clientHeight / 2)

  cursorX = footerAreaTag.offsetLeft + (footerAreaTag.clientWidth / 2)
  cursorY = footerAreaTag.offsetTop + (footerAreaTag.clientHeight / 2)
}

  
 window.addEventListener('resize', handleResizeFooter)
  
  
 logoTags.forEach(tag => {
  // code related for each ball here

  let speed = parseFloat(tag.getAttribute("data-speed"))

  function animate() {
    let distX = cursorX - logoX
    let distY = cursorY - logoY

    logoX = logoX + (distX * speed)
    logoY = logoY + (distY * speed)

    tag.style.left = (logoX - footerAreaTag.offsetLeft) + 'px'
    tag.style.top = logoY + 'px'

    requestAnimationFrame(animate)
  }

  animate()
  })
  







