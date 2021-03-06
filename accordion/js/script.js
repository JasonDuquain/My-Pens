

let links = document.querySelectorAll('.accord__link');
let divs = document.querySelectorAll('.accord__cont');

links.forEach((el, idx) => {
    //apply scrollHeight as inline style height before 1st click to keep height transition on 1st click
    if (el.nextElementSibling.classList.contains('accord__cont--is-visible')) {
        el.classList.add('accord__link--has-arrow-up');
        el.nextElementSibling.style.height = el.nextElementSibling.scrollHeight + 'px';
    }
    el.addEventListener('click', (e) => {
        e.preventDefault();
        let nextSib = el.nextElementSibling;
        if (nextSib.classList.contains('accord__cont--is-visible')) {
           nextSib.classList.remove('accord__cont--is-visible');
            el.classList.remove('accord__link--has-arrow-up');
            nextSib.style.height = 0;
        } else {
           nextSib.classList.add('accord__cont--is-visible');
            el.classList.add('accord__link--has-arrow-up');
            nextSib.style.height = `${nextSib.scrollHeight}px`;
            //remove height from all other divs
            divs.forEach((el, idx) => {
                if (el.previousElementSibling !== e.target) {
                    el.classList.remove('accord__cont--is-visible');
                    el.style.height = 0;
                    el.previousElementSibling.classList.remove('accord__link--has-arrow-up');
                }
            });
            
        }
    });
});



