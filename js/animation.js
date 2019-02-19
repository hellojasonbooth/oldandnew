
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


// this animates links at the top of the contact page
const animatedContactTags = document.querySelectorAll('div.contact-page--links span a')

animatedContactTags.forEach(tag =>{
    tag.style.opacity = 0
  })

  const fadeInContactTags = function() {
  
    let delay = 0.1
    
    animatedContactTags.forEach(tag =>{
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

  fadeInContactTags()






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




// this animates the section titles 
const sectionTitleTags = document.querySelectorAll('section div.collection-wrap h1')

  const sectionTitleAnimate = function() {

    sectionTitleTags.forEach(tag => {

    const tagTop = tag.getBoundingClientRect().top
    const tagBottom = tag.getBoundingClientRect().bottom

    if (tagTop < window.innerHeight && tagBottom > 0) {
        tag.style.animation = `fadeInTitle 0.5s 0.5s both`
    } else {
        tag.style.animation = ""
    }

  })

}
sectionTitleAnimate()


const sectionImageTags = document.querySelectorAll('section div.collection-wrap img')


const sectionImageAnimate = function() {

  sectionImageTags.forEach(tag => {

    const tagTop = tag.getBoundingClientRect().top
    const tagBottom = tag.getBoundingClientRect().bottom
    
    if (tagTop < window.innerHeight && tagBottom > 0) {
      tag.style.animation = `fadeInImage 1.2s 0.8s both`
    } else {
      tag.style.animation = ""
  }

  })

}
sectionImageAnimate()








// event listener for scroll to animate in and out certain elements
  document.addEventListener('scroll', function () {
    fadeInTags() 
    infoMaskAnimate()
    fadeInContactTags()
    sectionTitleAnimate()
    sectionImageAnimate()
  })