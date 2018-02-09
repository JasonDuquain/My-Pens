

let ul = document.querySelector('.tab__list');
let links = document.querySelectorAll('.tab__link');
let divs = document.querySelectorAll('.tab__box');

ul.addEventListener('click', (e) => {
    //only apply js if tab isn't already the active one
    if (e.target.classList.contains('tab__link') && !e.target.classList.contains('tab__link--is-active')) {
        e.preventDefault();
        //loop through all links and divs and remove the active/visible classes
        links.forEach((el, idx) => {
            el.classList.remove('tab__link--is-active');
            divs[idx].classList.remove('tab__box--is-visible');
            //add the active class to the clicked link
            e.target.classList.add('tab__link--is-active');
            //if the active link's href attribute matches the div's id attribute (slicing out the #) apply the visible class to that div
            if (e.target.getAttribute('href').slice(1) === divs[idx].getAttribute('id')) {
                divs[idx].classList.add('tab__box--is-visible');
            }
        });
    }
});
