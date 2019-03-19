


// div element follows the cursor
const cursorTag = document.querySelector('div.cursor')
const linkAreas = document.querySelectorAll('section div.collection a.collection-link')
const cursorTextTags = document.querySelectorAll('div.cursor p span')
// const sectionImgOne = document.querySelector('section div.collection-wrap img.one')


// move cursor 
const moveCursor = function (x, y) {
  cursorTag.style.left = x + 'px'
  cursorTag.style.top = y + 'px'
}

// call function to move cursor div based on x and y values
document.addEventListener('mousemove', function (event) {
  moveCursor(event.pageX, event.pageY)
})


// pick all the linkable areas to animate cursor
linkAreas.forEach(linkArea => {

  let delay = 0.1

  linkArea.addEventListener('mouseover', function(){
    growCursor()

    cursorTextTags.forEach(tag =>{

      tag.style.animation = `cursorText 0.6s cubic-bezier(.72,0,.01,1) ${delay}s both`
      delay = delay + 0.1
    })
  })

  linkArea.addEventListener('mouseout', function(){
    shrinkCursor()

    cursorTextTags.forEach(tag =>{
      tag.style.animation = ""
      delay = 0.1
    })
  })

  linkArea.addEventListener('click', function () {
  // sectionImgOne.style.animation = `fadeOutImage 1.2s ${delayImg}s both`
    // mainHeaderTag.classList.remove('animated')
  })

})


// when you mouseover make the cursor bigger
const growCursor = function () {
  cursorTag.classList.add('is-active')
}

// when you mouseout - make cursor smaller
const shrinkCursor = function () {
  cursorTag.classList.remove('is-active')
}
