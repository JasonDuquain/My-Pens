
let body = document.querySelector('body');
let lquote = document.querySelector('.lquote');
let rquote = document.querySelector('.rquote');
let not = document.querySelector('.not');
let conventional = document.querySelector('.conventional');
let never = document.querySelector('.never');
let boring = document.querySelector('.boring');
let containerWrap = document.querySelector('.container-wrap');
let containerWrapTwo = document.querySelector('.container-wrap--two');
let containerWrapThree = document.querySelector('.container-wrap--three');
let intersection = document.querySelector('.intersection');
let undefeated = document.querySelector('.undefeated');
let race = document.querySelector('.race');
let presents = document.querySelector('.presents');
let wrappy = document.querySelector('.wrappy');
let a = document.querySelector('.a');
let special = document.querySelector('.special');
let of = document.querySelector('.of');

let tl = gsap.timeline();
let duration = 1.3;

let ruleAfter = CSSRulePlugin.getRule('.container-wrap--two::after');

function init() {
    tl.from(lquote, {yPercent: -100, duration: duration})
    .from(rquote, {yPercent: 100, duration: duration}, "<")
    .from(not, {scale: 7, duration: duration, ease: "power2.in"}, "<0.5")
    .from(not, {opacity: 0, duration: .5}, "<0.7")
    .from(conventional, {yPercent: 100, opacity: 0, duration: .75, ease: "power1.in"}, "<.2")
    .to(not, {xPercent: -110, duration: .75, ease: Power4}, "+=.75")
    .to(never, {right: '16%', duration: .5}, "<.35")
    .to(conventional, {yPercent: 100, opacity: 0, duration: .3, ease: "power1.in"}, "<.4")
    .to(boring, { bottom: '17%', opacity: 1 }, "<+.15")
    .to(containerWrap, { display: 'none', duration: .2}, ">.5")
    .to(containerWrapTwo, { display: 'block', duration: .2})
    .to(ruleAfter, {
        duration: .4,
        cssRule: {
            width: "100%"
        } 
    })
    .to([intersection, race], { scaleY: 1, stagger: .35 }, ">.35")
    .to(containerWrapTwo, { display: 'none', duration: .2})
    .to(containerWrapThree, { display: 'block', duration: .2})
    .to(body, {backgroundColor: '#000', duration: .2}, "<")
    .to(undefeated, {display: 'none'}, ">2")
    .to(presents, {display: 'block'})
    .to(presents, {display: 'none', duration: 1.5})
    .to(wrappy, {display: 'block'})
    .to(wrappy, {display: 'none', duration: 1.5})
    .to(of, {display: 'block'})
    .to(of, {display: 'none', duration: 1.5})
    
}



//tl.timeScale(2);
//GSDevTools.create(); /* had to use minifed file to remove error */


window.addEventListener("load", function(event) {
  gsap.set(".container", {autoAlpha:1})
  init(); 
});