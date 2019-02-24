


// div element follows the cursor

const cursorTag = document.querySelector('div.cursor')
const linkTag = document.querySelector('div.collection a.collection-link')

const cursorTextTags = document.querySelectorAll('div.cursor span p')


// when you mouseover make the cursor bigger
const growCursor = function () {

  cursorTag.classList.add('is-active')
  
}

// when you mouseout - make cursor smaller
const shrinkCursor = function () {
  cursorTag.classList.remove('is-active')
}

// move cursor 
const moveCursor = function (x, y) {
  cursorTag.style.left = x + 'px'
  cursorTag.style.top = y + 'px'
}

// call function to grow cursor
linkTag.addEventListener('mouseover', function () {
  growCursor()
})



// call function to shrink cursor
linkTag.addEventListener('mouseout', function () {
  shrinkCursor()
})


// call function to move cursor div based on x and y values
document.addEventListener('mousemove', function (event) {
  moveCursor(event.pageX, event.pageY)
})




const cursorTagAnimate = function() {

  let delay = 0.1
    
  cursorTextTags.forEach(tag =>{
        tag.style.animation = `cursorText 0.5s ease ${delay}s both`
        delay = delay + 0.1
    })

}


linkTag.addEventListener('mouseover', function () {
  cursorTagAnimate()
})

linkTag.addEventListener('mouseout', function () {
  
  cursorTextTags.forEach(tag =>{       
    tag.style.animation = ""
  })

})