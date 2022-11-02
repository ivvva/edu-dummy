const menu = document.getElementById('menu')
const middle = document.getElementById('middle')
const bottom = document.getElementById('bottom')
const topSpan = document.getElementById('top')
const nav = document.getElementById('nav')
let menuActive = false

const observer = new IntersectionObserver((elements) => {
  elements.forEach(element => {
    if (element.isIntersecting) {
      console.log(element)
      element.target.style.opacity = '100'
      element.target.style.visibility = 'visible'
      element.target.style.transition = 'all 1.5s'
    } else {
      element.target.style.opacity = '0'
      element.target.style.visibility = 'invisible'
      element.target.style.transition = 'all 1.5s'
    }
  });
})

const hiddenElements = document.querySelectorAll('.fade')
hiddenElements.forEach((element) => observer.observe(element))

let typed = new Typed('#text-second', {
  strings: ['Online', 'Effective', 'Fast'],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
  loopCount: Infinity,
  backDelay: 700,
})

nav.style.visibility = 'hidden'
nav.style.opacity = '0'
nav.style.transform = 'translateX(300px)'

menu.addEventListener('click', () => {
  if (menuActive === false) {
    openMenu()
  } else if (menuActive === true) {
    closeMenu()
  }
})

function openMenu() {
  middle.style.transform = 'translateX(50px)'
  middle.style.opacity = '0'
  middle.style.transition = "all 1s"
  topSpan.style.transform = 'rotate(45deg)'
  topSpan.style.transition = "all 1s"
  bottom.style.transform = 'rotate(-45deg)'
  bottom.style.transition = "all 1s"
  nav.style.visibility = 'visible'
  nav.style.opacity = '100'
  nav.style.transform = 'translateX(0px)'
  nav.style.transition = "all 1s"
  menuActive = true
}

function closeMenu() {
  middle.style.transform = 'translateX(0px)'
  middle.style.opacity = '100'
  middle.style.transition = "all 1s"
  topSpan.style.transform = 'rotate(0deg)'
  topSpan.style.transform = 'translateY(-10px)'
  topSpan.style.transition = "all 1s"
  bottom.style.transform = 'rotate(0deg)'
  bottom.style.transform = 'translateY(10px)'
  bottom.style.transition = "all 1s"
  nav.style.visibility = 'hidden'
  nav.style.opacity = '0'
  nav.style.transform = 'translateX(300px)'
  nav.style.transition = "all 1s"
  menuActive = false
}




