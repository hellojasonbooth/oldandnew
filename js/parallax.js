


// const parallaxImgTag = document.querySelector('section div.parallax-img')
const sectionProfile = document.querySelector("section.profile")

// we want to move certain tags, based on how far they are from an anchor point
// the anchor point will be the middle of a section

document.addEventListener('scroll', function () {
    const topViewport = window.pageYOffset
    const midViewport = topViewport + (window.innerHeight / 2)

    const topSection = sectionProfile.offsetTop 
    const midSection = topSection + (sectionProfile.offsetHeight / 2)

    const distanceToSection = midViewport - midSection

    const parallaxTags = sectionProfile.querySelectorAll(`[data-parallax]`)

    // loop over each parallaxed tag
    parallaxTags.forEach(tag => {
        const speed = parseFloat(tag.getAttribute('data-parallax'))
        tag.style.transform = `translate(0, ${distanceToSection * speed - 50}%) rotate(6deg)`
    })





    // console.log(distanceToSection)
})





// progress bar 
// const bodyTag = document.querySelector('body')
// const progressTag = document.querySelector('div.progress')



// // when we scroll the page make a progress bar that
// // tracks the distance

// document.addEventListener('scroll', function () {

//     const pixels = window.pageYOffset
//     const pageHeight = bodyTag.getBoundingClientRect().height
//     const totalScrollableDistance = pageHeight - window.innerHeight

//     const percentage = pixels / totalScrollableDistance

//     progressTag.style.height = `${100 * percentage}%`

// })