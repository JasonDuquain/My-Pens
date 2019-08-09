
let skiHeading = document.querySelector('.ski__heading');

let elementsArrayOne = Array.from(document.querySelectorAll('.ski__element--fire div'));
let elementsArrayTwo = Array.from(document.querySelectorAll('.ski__element--earth div'));
let elementsArrayThree = Array.from(document.querySelectorAll('.ski__element--water div'));
let elementsArrayFour = Array.from(document.querySelectorAll('.ski__element--air div'));


let tl = new TimelineMax();

let splitHeading = new SplitText(skiHeading);

let easing = Power4.easeInOut; 

function random(min, max) {
    return (Math.random() * (max - min) + min);
}

function randomText() {
    
    splitHeading.chars.forEach((el, idx) => {
        TweenMax.from(el, 2.5, {
            opacity: 0,
            x: random(-500, 500),
            y: random(-500, 500),
            z: random(-500, 500),
            scale: 8.1,
            delay: idx * .02
        })
    })
    
}


tl.add(randomText) // how to get the next two lines to run after this??

tl.set(skiHeading, { opacity: 0 })

//tl.addLabel('now') 


// DRY this up
tl.staggerTo(elementsArrayOne, 1, {
    opacity: 1,
    y: 0,
    scale: 1,
    ease: easing
}, .1, "+=2.3")
tl.staggerTo(elementsArrayTwo, 1, {
    opacity: 1,
    y: 0,
    scale: 1,
    ease: easing
}, .1, "-=.8")
tl.staggerTo(elementsArrayThree, 1, {
    opacity: 1,
    scale: 1,
    y: 0,
    ease: easing
}, .1, "-=.8")
tl.staggerTo(elementsArrayFour, 1, {
    opacity: 1,
    scale: 1,
    y: 0,
    ease: easing
}, .1, "-=.8")


