
let imagesLinks = document.querySelectorAll('.gallery__link');

let navList = document.querySelector('.gallery__list');
let navLinks = document.querySelectorAll('.gallery__linknav');


navList.addEventListener('click', (e) => {
    if (e.target.classList.contains('gallery__linknav')) {
        if (e.target.textContent === 'other') {
             imagesLinks.forEach((el) => {
                 if (!el.classList.contains('other')) {
                     el.style.transform = 'scale(0)';
                     el.addEventListener('transitionend', function(e) {
                         el.style.display = 'none';
                     }, {once: true})
                 } else {
                     el.style.display = 'block';
                     setTimeout(() => {
                         el.style.transform = 'scale(1)';
                     }, 300)
                 }
             })
        } else if (e.target.textContent === 'blonde') {
            imagesLinks.forEach((el) => {
                 if (!el.classList.contains('blonde')) {
                     el.style.transform = 'scale(0)';
                     el.addEventListener('transitionend', function(e) {
                         el.style.display = 'none';
                     }, {once: true})
                 } else {
                     el.style.display = 'block';
                     setTimeout(() => {
                         el.style.transform = 'scale(1)';
                     }, 300)
                 }
             })
        } else if (e.target.textContent === 'brunette') {
            imagesLinks.forEach((el) => {
                 if (!el.classList.contains('brunette')) {
                     el.style.transform = 'scale(0)';
                     el.addEventListener('transitionend', function(e) {
                         el.style.display = 'none';
                     }, {once: true})
                 } else {
                     el.style.display = 'block';
                     setTimeout(() => {
                         el.style.transform = 'scale(1)';
                     }, 300)
                 }
             })
        } else {
            imagesLinks.forEach((el) => {
                
                el.style.display = 'block';
                
                 setTimeout(() => {
                     el.style.transform = 'scale(1)';
                 }, 300)
             })
        }
    }
})
