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

/* KEEP TRYING TO GET THIS TO WORK
texts.forEach((el, idx) => {
    write(el, idx);
    
    // this is async and wont work
    el.addEventListener('animationend', (e) => {
        console.log(0)
    })
})
*/


const textsArr = ['and erase', 'again', 'goodbye'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let repeat = document.querySelector('.repeat')
let typing = document.querySelector('.typing');

elThree.addEventListener('animationend', type)


function type() {
    
    repeat.classList.add('is-active');

        
    if (count === textsArr.length) {
        clearTimeout(clearIt)   
        count = 0;
    }

    currentText = textsArr[count];
    letter = currentText.slice(0, ++index);

    typing.textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }

    let clearIt = setTimeout(type, 200);

    
}





