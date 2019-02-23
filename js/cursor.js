


// div element follows the cursor

const cursorTag = document.querySelector('div.cursor')
const linkTag = document.querySelector('div.collection a.collection-link')


// when you mouseover make the cursor bigger
const growCursor = function () {
  cursorTag.classList.add('is-active')
  
//    if (textTag.classList.contains('open')){
//        cursorTag.innerHTML = "View"
//    } else {
//        cursorTag.innerHTML = "Close"
//    }
}

// when you mouseout - make cursor smaller
const shrinkCursor = function () {
  cursorTag.classList.remove('is-active')
//   cursorTag.innerHTML = ""
}

// move cursor 
const moveCursor = function (x, y) {
  cursorTag.style.left = x + 'px'
  cursorTag.style.top = y + 'px'
}

// call function to grow cursor
linkTag.addEventListener('mouseover', function () {
  growCursor()
  
//   if (textTag.classList.contains('open')){
//     cursorTag.innerHTML = "Close"
//   } else {
// 		cursorTag.innerHTML = "View"
//   }
//   textTag.style.cursor = 'none'
})

// call function to grow cursor
// textTag.addEventListener('click', function () {
  
//   if (textTag.classList.contains('open')){
//     cursorTag.style.backgroundColor = 'blue'
//     cursorTag.innerHTML = "Close"
//   } else {
//     cursorTag.style.backgroundColor = 'black'
// 		cursorTag.innerHTML = "View"
//   }
  
// })

// call function to shrink cursor
linkTag.addEventListener('mouseout', function () {
  shrinkCursor()
//   cursorTag.innerHTML = ""
})


// call function to move cursor div based on x and y values
document.addEventListener('mousemove', function (event) {
  moveCursor(event.pageX, event.pageY)
})