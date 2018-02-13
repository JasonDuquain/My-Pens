
let larr = document.querySelector('.slider__arr--left');
let rarr = document.querySelector('.slider__arr--right');
let current = 0;
let ul = document.querySelector('.slider__list');
let imgs = document.querySelectorAll('.slider__img');
let bubblesContainer = document.querySelector('.slider__bubbles');
let bubblesArr = [];

larr.addEventListener('click', (e) => {
    current--;
    
    if (current < 0) {
        current = imgs.length - 1;
    }
    
    ul.style.left = -current * ul.getBoundingClientRect().width + 'px';
});

rarr.addEventListener('click', (e) => {
    current++;
    
    if (current >= imgs.length) {
        current = 0;
    }
    
    ul.style.left = -current * ul.getBoundingClientRect().width + 'px';
    
    
});

imgs.forEach((el, idx) => {
    let bubble = document.createElement('span');
    bubble.classList.add('slider__bubble');
    bubblesContainer.append(bubble);
    bubblesArr.push(bubble);
});

bubblesArr.forEach((el, idx) => el.addEventListener('click', (e) => {
    idx = current;
}));
    


