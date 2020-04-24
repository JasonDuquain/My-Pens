
let magnifyingGlass = document.querySelector('.notif__magnify');
let searchBox = document.querySelector('.notif__search');

magnifyingGlass.addEventListener('click', (e) => {
  searchBox.classList.toggle('visible')
})

