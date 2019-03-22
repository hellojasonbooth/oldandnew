
// click animate and redirect to a collection page
// first
const linkFirst = document.querySelector('a.collection-link.first')
const collectionTitleFirst = document.querySelectorAll('a.collection-link.first div.title-wrap span h1 span')
const sectionImgOne = document.querySelector('section div.collection-wrap img.one')


linkFirst.addEventListener('click', function () {

let delayTitle = 0.3
let delayImg = 0.4
let delayDate = 1

sectionImgOne.style.animation = `fadeOutImage 1.2s ${delayImg}s both`

collectionTitleFirst.forEach(tag => {
    tag.style.animation = `fadeOutTitle 1.4s cubic-bezier(.72,0,.01,1) ${delayTitle}s both`
    delayTitle = delayTitle + 0.15
  })

  sectionTitleDate.forEach(tag => {
   tag.style.animation = `fadeOutTitle 1.4s cubic-bezier(.72,0,.01,1) ${delayDate}s both`
  })
})


// second
const linkSecond = document.querySelector('a.collection-link.second')
const collectionTitleSecond = document.querySelectorAll('a.collection-link.second div.title-wrap span h1 span')
const sectionImgTwo = document.querySelector('section div.collection-wrap img.two')

linkSecond.addEventListener('click', function () {

let delayTitle = 0.3
let delayImg = 0.4

sectionImgTwo.style.animation = `fadeOutImage 1.2s ${delayImg}s both`

collectionTitleSecond.forEach(tag => {
    tag.style.animation = `fadeOutTitle 1.4s cubic-bezier(.72,0,.01,1) ${delayTitle}s both`
    delayTitle = delayTitle + 0.15
  })
})


// third