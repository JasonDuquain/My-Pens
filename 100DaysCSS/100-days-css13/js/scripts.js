

const images = document.querySelectorAll('.gallery__img');
const topHalf = document.querySelector('.gallery__tophalf');
const bottomHalf = document.querySelector('.gallery__bottomhalf');
const closeButton = document.querySelector('.gallery__close');
const avatar = document.querySelector('.gallery__avatar');
const userName = document.querySelector('.gallery__name')

images.forEach(el => {
  el.addEventListener('click', function(e) {
    let altAttribute = el.getAttribute('alt');
    let srcAttribute = el.getAttribute('src');
    userName.textContent = altAttribute;
    avatar.style.backgroundImage = `url(${srcAttribute})`
    topHalf.classList.toggle('slidein');
    bottomHalf.classList.toggle('slidein');
    avatar.classList.toggle('slidein');
    closeButton.classList.toggle('slidein');
  });
});

closeButton.addEventListener('click', function(e) {
    topHalf.classList.toggle('slidein');
    bottomHalf.classList.toggle('slidein');
    avatar.classList.toggle('slidein');
    closeButton.classList.toggle('slidein');
});