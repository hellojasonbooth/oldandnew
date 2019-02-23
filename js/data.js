


//   const dataTag = document.querySelector('main')
//   const logoTag = document.querySelector('header a.logo-tag')



// if element has data do something
  const homeInstaTag = document.querySelector('header a.social')
  const sections = document.querySelectorAll('section')





document.addEventListener('scroll', function(){
    

  sections.forEach(section => {

    if (section.hasAttribute("data-is-dark")) {
      homeInstaTag.classList.add('white')
    } else {
      homeInstaTag.classList.remove('white')
    }



  })



})