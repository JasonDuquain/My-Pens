
let skiHeading = document.querySelector('.ski__heading');

let fireLetters = Array.from(document.querySelectorAll('.ski__element--fire > div'));
let earthLetters = Array.from(document.querySelectorAll('.ski__element--earth > div'));
let waterLetters = Array.from(document.querySelectorAll('.ski__element--water > div'));
let airLetters = Array.from(document.querySelectorAll('.ski__element--air > div'));

let elementsArray = Array.from(document.querySelectorAll('.ski__element div'));


let tl = new TimelineMax();
let splitHeading = new SplitText(skiHeading);

// add these as high as possible to avoid the content flash solid for a second before animation starts
//tl.set(['.svg-fire', '.svg-earth', '.svg-water', '.svg-air'], { opacity: 0, scale: 0 });
//tl.set(['.fire--one', '.fire--two', '.fire--three', '.fire--four'], { opacity: 0 })

function random(min, max) {
    return (Math.random() * (max - min) + min);
}

function hay() {
    
    splitHeading.chars.forEach((el, idx) => {
        TweenMax.from(el, 3, {
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




