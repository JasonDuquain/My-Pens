let content = document.querySelector('.large-hero__main-heading');
let blur = document.querySelector('.large-hero__overlay'); // this element has the filter: blur(4px) applied
let wHeight = window.innerHeight;

window.addEventListener('resize', () => wHeight = window.innerHeight);

window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        function( cb ){
            window.setTimeout(cb, 1000 / 60);
        };
})();

class Scroller {
    constructor() {
        this.latestKnownScrollY = 0;
        this.ticking = false; 
    }
    
    init() {
        window.addEventListener('scroll', this.onScroll.bind(this));
        
        blur.style.backgroundImage = `url(${heroImageUrl})`;
        blur.style.backgroundPosition = '60% 100%';
    }

    onScroll() {

        if (blur.getBoundingClientRect().bottom > 150) {
            this.latestKnownScrollY = window.scrollY;
            this.requestTick();
        } else { return; }

    }

    requestTick() {
        if ( !this.ticking ) {
            window.requestAnimFrame(this.update.bind(this));
        }
        this.ticking = true;
    }

    update() {
        let currentScrollY = this.latestKnownScrollY;
        this.ticking = false;
      
        let slowScroll = currentScrollY / 2;
        let blurScroll = currentScrollY * 2;
        let opaScroll = 1.4 - currentScrollY / 400;
        
        /* needed to adjust the translate since the initial heading is xlated in css  */
        content.style.transform = `translate(-50%, ${slowScroll}px)`;
        content.style.opacity = opaScroll;
      
        blur.style.opacity = blurScroll / wHeight; 
    }
    
}

var scroller = new Scroller();  
scroller.init();


/***********  TESTIMONIAL SLIDER  ***********/



/**** REMOVE HERO TEXT ANIMATION AFTER ONE TIME*****/
let tests = document.querySelectorAll('[class*=quote]');

tests.forEach((el) => {
    el.addEventListener('animationend', function(e) {
        window.sessionStorage.setItem('quote', 'complete');
    });
});

tests.forEach((el) => {
    if (window.sessionStorage.getItem('quote')) {
        el.style.animation = 'none';
        el.style.opacity = '1';
    }
});

/********   BACK TO TOP BTN  *********/
let docElement = document.documentElement;
let docBody = document.body;
let bttBtn = document.querySelector('.js-btt-btn');
let highestHeight = docElement.scrollHeight;

//changed from document to window - still not working on mobile
window.addEventListener('scroll', (e) => {
    (window.pageYOffset > (highestHeight / 8)) ? bttBtn.classList.add('active') : bttBtn.classList.remove('active');
});


/*****  SUBSCRIBE INPUTS CHANGE ICON COLOR ON FOCUS  ******/
let inputs = document.querySelectorAll('form input, .subscribe__comment');

inputs.forEach((el) => el.addEventListener('focus', changeFocus));
inputs.forEach((el) => el.addEventListener('blur', changeBlur));

function changeFocus(e) {
    // updated path to acct for kwes wrapper - removed now that using lambda
    let prevSib = e.target.parentElement.firstElementChild;
    prevSib.classList.add('input-color');
}

function changeBlur(e) {
    // updated path to acct for kwes wrapper - removed now that using lambda
    let prevSib = e.target.parentElement.firstElementChild;
    prevSib.classList.remove('input-color');
}


/****************  STICKY HEADER   ****************/
let header = document.querySelector('.site-header');
let nav = document.querySelector('.navigation');
let hero = document.querySelector('.large-hero');

window.addEventListener('scroll', (e) => {
    if (hero.getBoundingClientRect().bottom <= 0) {
        document.body.style.paddingTop = nav.getBoundingClientRect().height + 'px';
        nav.classList.add('fixed');
    } else {
        document.body.style.paddingTop = 0;
        nav.classList.remove('fixed');
    }
});


/*********** HAMBURGER MENU  ***********/

let hamburgerMenu = document.querySelector('.hamburger-icon');

hamburgerMenu.addEventListener('click', function(e) {
    this.classList.toggle('interact');
    nav.classList.toggle('hamburger-on');
});


/****************  HIGHTLIGHT NAV ITEMS ON SCROLL   ****************/
let navs = document.querySelectorAll('.navigation__link:not(.navigation__link-home)');
let sects = document.querySelectorAll('section:not(:first-of-type):not(:last-of-type)');

window.addEventListener('scroll', (e) => {
    
    navs.forEach((el, idx) => {
        
        let sect = sects[idx].getBoundingClientRect();
        if (sect.top <= 150 && sect.bottom >= 150) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    })
});


/********  COPYRIGHT DATE *******/
let year = document.querySelector('.year');
year.textContent = new Date().getFullYear();


/**** code to keep svcs tables from visibly fading out on page load ***  */
window.addEventListener('load', (e) => {
    let svcsTable = document.querySelectorAll('.services__table-wrap');
            
    svcsTable.forEach((el, idx) => {
        el.classList.add('enabled');
    })
});




