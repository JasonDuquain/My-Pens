
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
    }, "<-.2")
    
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


let afterImage = document.querySelector('.before__after');
let inputRange = document.querySelector('.before__range');

inputRange.addEventListener('input', function(e) {
    afterImage.style.width = `${this.value}%`;
})



window.addEventListener("load", function(event) {
  gsap.set(".hero", {autoAlpha:1})
  init(); 
});