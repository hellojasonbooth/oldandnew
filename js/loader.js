

const headerTag = document.querySelector('header')

const loaderTag = document.querySelector('div.loader')
const loaderMaskTag = document.querySelector('div.loader-mask')

const loaderPageDesc = document.querySelectorAll('div.loader-page--description span p')


// function loader () {

//     loaderMaskTag.style.transform = 'translateX(0px)'

// }

// loader()



setTimeout(function () { 
    loaderTag.style.opacity = '0'

    headerTag.classList.add('animated')

  }, 1800)




  animateLoaderDesc = function () {
  
    let delayItems = 0.1
    
    
    // animate each item
    loaderPageDesc.forEach(tag => {
  
      tag.style.animation = `fadeup 1s ease-in-out ${delayItems}s both`
      delayItems = delayItems + 0.1

    })

  }

  animateLoaderDesc()
