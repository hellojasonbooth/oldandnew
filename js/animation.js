

const animatedTags = document.querySelectorAll('footer div.social-links a')

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
        delay = delay + 0.1
      } else {
        tag.style.opacity = 0
        tag.style.animation = ""
      }
    })
  }

  fadeInTags()



  // const infoMaskTag = document.querySelectorAll('div.profile-info p:before')

  // infoMaskTag.forEach(tag =>{
  //   tag.style.width = '40px'
  // })





  document.addEventListener('scroll', function () {
    fadeInTags() 
  })