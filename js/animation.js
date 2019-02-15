
// this animates links in the footer
const animatedTags = document.querySelectorAll('footer span a')

animatedTags.forEach(tag =>{
    tag.style.opacity = 0
  })

  const fadeInTags = function() {
  
    let delay = 0.1
    
    animatedTags.forEach(tag =>{
      const tagTop = tag.getBoundingClientRect().top
      const tagBottom = tag.getBoundingClientRect().bottom
         
      if(tagTop < window.innerHeight && tagBottom > 0) {
        tag.style.animation = `fadeup 0.8s ${delay}s both`
        delay = delay + 0.2
      } else {
        tag.style.opacity = 0
        tag.style.animation = ""
      }
    })
  }

  fadeInTags()



  // this animates the mask for the info on the profile page

  const infoMaskTag = document.querySelectorAll('div.profile-info div.info-mask')

  const infoMaskAnimate = function() {

  infoMaskTag.forEach(tag =>{
    const tagTop = tag.getBoundingClientRect().top
    const tagBottom = tag.getBoundingClientRect().bottom


    if(tagTop < window.innerHeight && tagBottom > 0) {
      tag.style.animation = 'mask 0.8s 0.2s both'
    } else {
      tag.style.animation = ""
    }

  })

}

infoMaskAnimate()




// event listener for scroll to animate in and out certain elements
  document.addEventListener('scroll', function () {
    fadeInTags() 
    infoMaskAnimate()
  })