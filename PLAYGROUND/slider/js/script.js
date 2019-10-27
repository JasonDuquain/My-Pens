
let larr = document.querySelector('.slider__arr--left');
let rarr = document.querySelector('.slider__arr--right');
let ul = document.querySelector('.slider__list');
let imgs = document.querySelectorAll('.slider__img');
let bubblesContainer = document.querySelector('.slider__bubbles');
let bubblesArr = [];
let current = 0;

//let lis = document.querySelectorAll('.slider__item');


function switchImg() {
    ul.style.left = -current * ul.getBoundingClientRect().width + 'px';
    //ul.style.left = -current * (ul.getBoundingClientRect().width / lis.length) + 'px';
    
    if (current > 0 && current < imgs.length -1) { // WHY && AND NOT || ????
        ul.style.transition = null;
    }
    
    (current === 0) ? larr.classList.add('slider_arr--js-disable') : larr.classList.remove('slider_arr--js-disable');
    
    (current === imgs.length -1) ? rarr.classList.add('slider_arr--js-disable') : rarr.classList.remove('slider_arr--js-disable');


    bubblesArr.forEach((el, idx) => {
        (idx === current) ? el.classList.add('slider__bubble--js-active') : el.classList.remove('slider__bubble--js-active');
    });
}

function switchRight() {
    current++;
    
    if (current >= imgs.length) {
        current = 0;
        ul.style.transition = 'none';
    }
    
    switchImg();  
}

larr.addEventListener('click', (e) => {
    clearInterval(clearIt);
    current--;
    
    if (current < 0) {
        current = imgs.length - 1;
        ul.style.transition = 'none';
    }
    
    switchImg();
    
});

rarr.addEventListener('click', () => {
    clearInterval(clearIt);
    current++;
    
    if (current >= imgs.length) {
        current = 0;
        ul.style.transition = 'none';
    }
    
    switchImg();  
});

imgs.forEach((el, idx) => {
    let bubble = document.createElement('span');
    bubble.classList.add('slider__bubble');
    bubblesContainer.append(bubble);
    bubblesArr.push(bubble);
});

bubblesArr.forEach((el, idx) => el.addEventListener('click', (e) => {
    current = idx;
    switchImg();
  
}));
 
switchImg();

window.addEventListener('resize', switchImg);

let clearIt = setInterval(switchRight, 2000);

ul.addEventListener('mouseover', () => {
    clearInterval(clearIt);
});

/* mouseout keeps re-triggering whenever hovering the arrows and hovering off - possible fix?? */
/*ul.addEventListener('mouseout', () => {
    switchImg();
    clearIt = setInterval(switchRight, 2000);
});*/
