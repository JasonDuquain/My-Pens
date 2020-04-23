const hamburger = document.querySelector('.frame__center');
const line = document.querySelector('.frame__line');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('frame__center--animate')
})