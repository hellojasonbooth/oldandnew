
$.scrollify({
    section : ".collection",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: false,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
  });


const footerHome = document.querySelector('footer.home-footer')
const instaHome = document.querySelector('#insta')
const logoHome = document.querySelector('.logohome')

const addClass = function() {
  
    const tagTop = footerHome.getBoundingClientRect().top
    const tagBottom = footerHome.getBoundingClientRect().bottom
       
    if(tagTop < window.innerHeight && tagBottom > 0) {
      footerHome.classList.add('active')
      logoHome.classList.add('white')
      instaHome.classList.add('white')
    } else {
      footerHome.classList.remove('active')
      logoHome.classList.remove('white')
      instaHome.classList.remove('white')
    }

  }
  addClass()


  document.addEventListener('scroll', function () {
    addClass()
  })
