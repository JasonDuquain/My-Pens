
let skiHeading = document.querySelector('.ski__heading');

let elementsArray = Array.from(document.querySelectorAll('.ski__element div'));

console.log(elementsArray)

let tl = new TimelineMax();
let splitHeading = new SplitText(skiHeading);

function random(min, max) {
    return (Math.random() * (max - min) + min);
}

function hay() {
    
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


tl.add(hay) // how to get the next two lines to run after this??
tl.addLabel('now') // nice try
tl.to('.ski__element--fire', 1, {
    opacity: 1
}, "now+=0")
tl.to('.ski__element--earth', 1, {
    opacity: 1
}, "now+=1")



