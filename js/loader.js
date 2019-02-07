

const headerTag = document.querySelector('header')

const loaderTag = document.querySelector('div.loader')
const loaderMaskTag = document.querySelector('div.loader-mask')


// function loader () {

//     loaderMaskTag.style.transform = 'translateX(0px)'

// }

// loader()

setTimeout(function () { 
    loaderTag.style.opacity = '0'


    headerTag.classList.add('animated')

  }, 1200)
