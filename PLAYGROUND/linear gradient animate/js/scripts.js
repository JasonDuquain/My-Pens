
containerWrapThree.classList.add('try')


let wrapAfter = window.getComputedStyle(containerWrapThree, ':after');
let computedStyles = getComputedStyle(wrap);


containerWrapThree.classList.add('has--gradient')


console.log(computedStyles.getPropertyValue('background-image'));
console.log(wrapAfter.getPropertyValue('background-image'));

let first = 40;
let second = 50;
let third = 60;
let fourth = -10;
let fifth = 0;
let sixth = 10;

let opacity = .4;

function animateGradientAfter() {
    fourth += .5;
    fifth += .5;
    sixth += .5;
    
    document.documentElement.style.setProperty('--fourth', fourth)
    document.documentElement.style.setProperty('--fifth', fifth)
    document.documentElement.style.setProperty('--sixth', sixth) 
    
    if (fourth <= 100) {
        requestAnimationFrame(animateGradientAfter);    
        /* trying to run if (fourth >= 100) { cancelAnimationFrame(clearIt); doesnt work } */
    }
    
    if (fourth == 40) {
        wrap.classList.add('has--gradient')
        animateGradient();
    }
    
    if (fourth > 40) {
        opacity -= .005;
        document.documentElement.style.setProperty('--opacity', opacity)
    }

}

let clearIt = requestAnimationFrame(animateGradientAfter);

function animateGradient() {
    first -= .1;
    second -= .1;
    third -= .1;
    
    document.documentElement.style.setProperty('--first', first)
    document.documentElement.style.setProperty('--second', second)
    document.documentElement.style.setProperty('--third', third) 

    if (third >= 0) {
        requestAnimationFrame(animateGradient);    
        /* trying to run if (third <= 0) { cancelAnimationFrame(clearIt); doesnt work } */
    }
}



