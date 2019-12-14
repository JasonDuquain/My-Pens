let nav = document.querySelector('.nav');
//let navHeight = nav.getBoundingClientRect().height;
let hero = document.querySelector('.hero');

let styles = window.getComputedStyle(nav);
let navHeight = styles.getPropertyValue('height');
hero.style.setProperty('--navheight', navHeight)


/* get navlogo width for use in the logo border triangle */
let navLogo = document.querySelector('.nav__logo');
let navLogoStyles = getComputedStyle(navLogo);
let navLogoWidth = navLogoStyles.getPropertyValue('width');
document.documentElement.style.setProperty('--logowidth', navLogoWidth)



/* https://stackoverflow.com/questions/31223341/detecting-scroll-direction */
var lastScrollTop = 0;
window.addEventListener("scroll", function(){ // or 
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st > lastScrollTop){
      nav.classList.add('is--scrolling');
   } else {
      nav.classList.remove('is--scrolling');
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);




let docElement = document.documentElement;
let body = document.body;


let tl = gsap.timeline();
let duration = 1.3;

let heroAfter = CSSRulePlugin.getRule('.hero::after');
let heroSectOneAfter = CSSRulePlugin.getRule('.hero__sect--one::after');
let heroSubheadingWrapAfter = CSSRulePlugin.getRule('.hero__subheading--wrap::after');
let heroHeadingWrapAfter = CSSRulePlugin.getRule('.hero__heading-wrap::after');
let heroButtonWrapAfter = CSSRulePlugin.getRule('.hero__button--wrap::after');


function init() {

    tl.to(heroHeadingWrapAfter, {
        duration: .5,
        cssRule: {
            right: '0%'
        } 
    })
    tl.set('.hero__heading', {
        opacity: 1
    })
    .to(heroHeadingWrapAfter, {
        duration: .5,
        cssRule: {
            left: '100%'
        } 
    })
    
    .to(heroSubheadingWrapAfter, {
        duration: .5,
        cssRule: {
            right: '10%'
        } 
    }, "<-.5")
    tl.set('.hero__subheading', {
        opacity: 1
    })
    .to(heroSubheadingWrapAfter, {
        duration: .5,
        cssRule: {
            left: '100%'
        } 
    }, ">-.3")
    
    .to(heroAfter, {
        duration: .8,
        cssRule: {
            rotateY: '-180deg',
            scale: .95,
            opacity: 1
        } 
    }, "<-.3")
    /* need to put the transforms seperate and keep the scale at .95 on the above tween */
    .to(heroAfter, {
        duration: .3,
        cssRule: {
            scale: 1
        } 
    })
    
    /* set this to make sure the next tween comes in from the left of the viewport */
    tl.set('.hero', {
        overflow: 'visible'
    })
    /* issues with em units */
    .to(heroSectOneAfter, {
        duration: .4,
        cssRule: {
            right: 40
        } 
    }, "<-.9")
    tl.set('.hero__image', {
        opacity: 1
    })
    .to(heroSectOneAfter, {
        duration: .4,
        cssRule: {
            left: '100%'
        } 
    }, "<")
    tl.to(heroSectOneAfter, {
        duration: .1,
        cssRule: {
            backgroundColor: 'transparent'
        } 
    }, ">")
    
    .to(heroButtonWrapAfter, {
        duration: .35,
        cssRule: {
            right: '20%'
        } 
    }, "<")
    tl.set('.hero__button', {
        opacity: 1
    })
    .to(heroButtonWrapAfter, {
        duration: .35,
        cssRule: {
            left: '80%'
        } 
    }, ">")
    .to('.hero__button', {
        duration: .6,
        backgroundColor: 'hsl(274, 61%, 64%)'
    }, ">-.3")
    
    
    
    //tl.timeScale(.7)
    
}


/****** BEFORE/AFTER image *****/
let afterImage = document.querySelector('.before__after');
let inputRange = document.querySelector('.before__range');

inputRange.addEventListener('input', function(e) {
    afterImage.style.width = `${this.value}%`;
})


/****** TOTALS *****/
let number = Array.from(document.querySelectorAll('.totals__number'));
let totalOne = 0;
let totalTwo = 0;

/***** TODO: improve this to make each counter take the same amount of time and slow up at the end ******/

function increaseNumber(element, total, duration) {
    let start = 0;
    let clearIt = setInterval(() => {
        start++;
        element.textContent = start;
        
        /* slow counter down at end */
        /* https://stackoverflow.com/questions/4372902/javascript-calculate-x-of-a-number */
        if (start > (((95 / 100) * total))) {
            
            clearInterval(clearIt);
            
            let clearItAgain = setInterval(() => {
                start++;
                element.textContent = start;
                
                if (start >= total) {
                    clearInterval(clearItAgain);
                }
                
            }, 70)
        }

        /* dont think this will ever be reached 
        if (start >= total) {
            clearInterval(clearIt);
        }
        */

    }, duration)
}

increaseNumber(number[0], 500, 6);
increaseNumber(number[1], 30, 120);
increaseNumber(number[2], 780, 4);






window.addEventListener("load", function(event) {
  gsap.set(".hero", {autoAlpha:1})
  init(); 
});