const hero = document.querySelector('.hero')
const slider = document.querySelector('.slider')
const logo = document.querySelector('#logo')
const hamburger = document.querySelector('.hamburger')
const headline = document.querySelector('.headline')
const headlineTitle = document.querySelector('.headline-title')


const tl = new TimelineMax()

tl.fromTo(hero, 1,
    { height: "0%" },
    { height: "80%", ease: Power2.easeInOut })

    .fromTo(hero, 1.2,
        { width: "100%" },
        { width: "80%", ease: Power2.easeInOut })
    .fromTo(slider, 1.2,
        { x: "-100%" },
        { x: "0%", ease: Power2.easeInOut }, "-=1.2")
    .fromTo(headline, 1,
        { x: "-200%", opacity: 0 },
        { x: "-30%", opacity: 1, ease: Power2.easeInOut }, "-=0.5")
    .fromTo(headlineTitle, 1,
        { x: "-200%", opacity: 0 },
        { x: "-15%", opacity: 1, ease: Power2.easeInOut }, "-=0.9")
    .fromTo(logo, 0.5,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0 },
        "-=1"
    )
    .fromTo(hamburger, 0.5,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0 },
        "-=1.5"
    )

