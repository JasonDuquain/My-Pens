const texts = document.querySelectorAll('h1');
const textLengthArr = [];

texts.forEach((el, idx) => {
    textLengthArr.push(el.textContent.length);
});

const elOne = texts[0];
const elTwo = texts[1];
const elThree = texts[2];

function write(el, num) {
    let computedStyles = window.getComputedStyle(el);
    document.documentElement.style.setProperty('--length', textLengthArr[num]); 
    document.documentElement.style.setProperty('--duration', textLengthArr[num] * 100); 
    el.classList.add('animated'); 
}

write(elOne, 0);

elOne.addEventListener('animationend', (e) => {
    e.target.style.border = 'none';
    write(elTwo, 1);
});

elTwo.addEventListener('animationend', (e) => {
    e.target.style.border = 'none';
    write(elThree, 2);
});
