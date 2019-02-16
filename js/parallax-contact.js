
const sectionContact = document.querySelector("section.contact-title")

document.addEventListener('scroll', function () {

    const topViewport = window.pageYOffset
    const midViewport = topViewport + (window.innerHeight / 2)

    const topSection = sectionContact.offsetTop 
    const midSection = topSection + (sectionContact.offsetHeight / 2)

    const distanceToSection = midViewport - midSection

    const parallaxTags = sectionContact.querySelectorAll(`[data-parallax]`)

    // loop over each parallaxed tag
    parallaxTags.forEach(tag => {
        const speed = parseFloat(tag.getAttribute('data-parallax'))
        tag.style.transform = `translate(0, ${distanceToSection * speed - 50}%) rotate(6deg)`
    })

})