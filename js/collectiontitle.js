
const collectionPageTitle = document.querySelectorAll('div.parallax-title span h1 span')


delay = 1

collectionPageTitle.forEach(tag => {
    tag.style.animation = `fadeInCollectionTitle 1.4s cubic-bezier(.72,0,.01,1) ${delay}s both`
    delay = delay + 0.15
})