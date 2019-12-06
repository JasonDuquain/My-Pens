
let wrap = document.querySelector('.wrap');

let computedStyles = getComputedStyle(wrap);
console.log(computedStyles.getPropertyValue('background-image'));

let first = 80;
let second = 90;
let third = 100;

/*
for (let i = 79; i > 0; i--) {
    document.documentElement.style.setProperty('--first', i)
    document.documentElement.style.setProperty('--second', i + 10)
    document.documentElement.style.setProperty('--third', i + 10)
}
*/


let clearIt = requestAnimationFrame(animateGradient)

function animateGradient() {
    first -= .25;
    second -= .25;
    third -= .25;
    
    document.documentElement.style.setProperty('--first', first)
    document.documentElement.style.setProperty('--second', second)
    document.documentElement.style.setProperty('--third', third) 
    
    if (third <= 0) {
        cancelAnimationFrame(animateGradient)
    }
    
    /* if using setInterval dont use it within this fn */
    requestAnimationFrame(animateGradient)
}



