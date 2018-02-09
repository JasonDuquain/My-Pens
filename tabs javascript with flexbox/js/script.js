

let ul = document.querySelector('.tab-list__list');
let links = document.querySelectorAll('.tab-list__link');
let tabs = document.querySelectorAll('.tab__box');

ul.addEventListener('click', (e) => {
    //only apply js if tab isn't already the active one
    if (e.target.classList.contains('tab-list__link') && !e.target.classList.contains('tab-list__link--is-active')) {
        e.preventDefault();
        //loop through all links and divs and remove the active/visible classes
        links.forEach((el, idx) => {
            el.classList.remove('tab-list__link--is-active');
            tabs[idx].classList.remove('tab__box--is-visible');
            //add the active class to the clicked link
            e.target.classList.add('tab-list__link--is-active');
            //if the active link's href attribute matches the div's id attribute (slicing out the #) apply the visible class to that div
            if (e.target.getAttribute('href').slice(1) === tabs[idx].getAttribute('id')) {
                tabs[idx].classList.add('tab__box--is-visible');
            }
        });
    }
});



