let lines = document.querySelectorAll('.card__line');
let choplifterLines = document.querySelectorAll('.card__line--two');

/* https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript */
function randomIntFromRange(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}


lines.forEach((el, idx) => {
  el.addEventListener('animationiteration', (e) => {
    el.style.width = `${randomIntFromRange(4,23)}px`;
  });
});

choplifterLines.forEach((el, idx) => {
  el.addEventListener('animationiteration', (e) => {
    el.style.width = `${randomIntFromRange(12,23)}px`;
  });
});










