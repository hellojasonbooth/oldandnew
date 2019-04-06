
const mainHeaderTag = document.querySelector('#main-header')


document.addEventListener("DOMContentLoaded", function(event) {

    setTimeout(function () {
    
        mainHeaderTag.classList.add('animated')
    
      }, 1100)
  })



const mainLoaderTag = document.querySelector('div.main-loader')

  setTimeout(function () { 
    mainLoaderTag.style.opacity = '0'

  }, 340)