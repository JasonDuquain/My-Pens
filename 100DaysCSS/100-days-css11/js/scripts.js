const word = document.querySelector('.quote__word');
const definition = document.querySelector('.quote__definition')
const sound = document.querySelector('audio');
const soundSvg = document.querySelector('.quote__icon');

word.addEventListener('mouseenter', (e) => {
  definition.classList.add('visible');
})

definition.addEventListener('mouseleave', (e) => {
  definition.classList.remove('visible');
})


soundSvg.addEventListener('click', (e) => {
  sound.play();
})