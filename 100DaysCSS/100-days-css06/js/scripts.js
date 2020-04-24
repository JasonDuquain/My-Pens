
const magnifyingGlass = document.querySelector('.notif__magnify');
const searchBox = document.querySelector('.notif__search');

const svgHamburger = document.querySelector('.notif__svg');
const mainCard = document.querySelector('.notif');
const slideOutMenu = document.querySelector('.notif__slideout');

const items = document.querySelectorAll('.notif__item');


svgHamburger.addEventListener('click', (e) => {
  mainCard.classList.toggle('move');
  slideOutMenu.classList.toggle('move');
})

magnifyingGlass.addEventListener('click', (e) => {
  searchBox.classList.toggle('visible')
});

window.addEventListener('load', (e) => {
  items.forEach((el, idx) => el.classList.add('visible'))
})








