
let skiHeading = document.querySelector('.ski__heading');

<<<<<<< HEAD
let elementsArrayOne = Array.from(document.querySelectorAll('.ski__element--fire div'));
let elementsArrayTwo = Array.from(document.querySelectorAll('.ski__element--earth div'));
let elementsArrayThree = Array.from(document.querySelectorAll('.ski__element--water div'));
let elementsArrayFour = Array.from(document.querySelectorAll('.ski__element--air div'));
=======
let fireLetters = Array.from(document.querySelectorAll('.ski__element--fire > div'));
let earthLetters = Array.from(document.querySelectorAll('.ski__element--earth > div'));
let waterLetters = Array.from(document.querySelectorAll('.ski__element--water > div'));
let airLetters = Array.from(document.querySelectorAll('.ski__element--air > div'));

let elementsArray = Array.from(document.querySelectorAll('.ski__element div'));
>>>>>>> 77c68f0e97085a80c2a6a0025e7075428523a2db


let tl = new TimelineMax();

let splitHeading = new SplitText(skiHeading);

<<<<<<< HEAD
let easing = Power4.easeInOut; 
=======
// add these as high as possible to avoid the content flash solid for a second before animation starts
//tl.set(['.svg-fire', '.svg-earth', '.svg-water', '.svg-air'], { opacity: 0, scale: 0 });
//tl.set(['.fire--one', '.fire--two', '.fire--three', '.fire--four'], { opacity: 0 })
>>>>>>> 77c68f0e97085a80c2a6a0025e7075428523a2db

function random(min, max) {
    return (Math.random() * (max - min) + min);
}

function randomText() {
    
    splitHeading.chars.forEach((el, idx) => {
<<<<<<< HEAD
        TweenMax.from(el, 2.5, {
=======
        TweenMax.from(el, 3, {
>>>>>>> 77c68f0e97085a80c2a6a0025e7075428523a2db
            opacity: 0,
            x: random(-500, 500),
            y: random(-500, 500),
            z: random(-500, 500),
            scale: 8,
            delay: idx * .02,
			ease: Power1.easeOut,
			onComplete: remaining
        }) 
		
    })
}


<<<<<<< HEAD
tl.add(randomText) // how to get the next two lines to run after this??

tl.set(skiHeading, { opacity: 0 })

//tl.addLabel('now') 
=======
tl.set(skiHeading, {opacity: 1})
tl.add(hay) 
function remaining() {
	tl.staggerTo(['.svg-fire', '.svg-earth', '.svg-water', '.svg-air'], 1.5, {
		opacity: 1,
		scale: 1,
		ease: Power3.easeOut,
	}, .3)
	tl.staggerTo(fireLetters, .5, {
		opacity: 1,
		y: 0
	}, .1, "-=1") 
	tl.staggerTo(earthLetters, .5, {
		opacity: 1,
		y: 0
	}, .1, "-=.5") 
	tl.staggerTo(waterLetters, .5, {
		opacity: 1,
		y: 0
	}, .1, "-=.5") 
	tl.staggerTo(airLetters, .5, {
		opacity: 1,
		y: 0
	}, .1, "-=.5") 

	
	splitHeading.revert();
}
>>>>>>> 77c68f0e97085a80c2a6a0025e7075428523a2db


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


