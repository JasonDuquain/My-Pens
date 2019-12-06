
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
let roundtable = document.querySelector('.roundtable');

let tl = gsap.timeline();
let duration = 1.3;

let ruleAfter = CSSRulePlugin.getRule('.container-wrap--two::after');
let containerWrapThreeAfter = CSSRulePlugin.getRule('.container-wrap--three::after');
let containerThreeBefore = CSSRulePlugin.getRule('.container--three::before');
let containerWrapThreeBefore = CSSRulePlugin.getRule('.container-wrap--three::before');
let containerThreeAfter = CSSRulePlugin.getRule('.container--three::after');

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
    .to(containerWrapTwo, { display: 'none', duration: .2}, ">1")
    .to(containerWrapThree, { display: 'block', duration: .2})
    .to(body, {backgroundColor: '#000', duration: .2}, "<")
    .to(undefeated, {display: 'none'}, ">2")
    .to(presents, {display: 'block'})
    .to(presents, {display: 'none', duration: 1.5})
    .to(wrappy, {display: 'block'})
    .to(wrappy, {display: 'none', duration: 1.5})
    .to(of, {display: 'block'})
    .to(of, {display: 'none', duration: 1.5})
    .to(containerWrapThree, { scale: .4, backgroundColor: 'red' })
    
    /* if you need to add a class to the above tween this is 1 way
    .to(containerWrapThree, { scale: .4, backgroundColor: 'red', onComplete: function() {
        containerWrapThree.classList.add('add--border')
    }  })
    */
    
    .add('myLabel')
    
    .to(containerWrapThree, { scale: 1, duration: 6})
    
    .to(containerWrapThreeAfter, {
        duration: .3,
        cssRule: {
            left: 0,
            opacity: 1
        } 
    }, "<")
    .to(containerThreeBefore, {
        duration: .3,
        cssRule: {
            top: 0,
            opacity: 1
        } 
    }, ">")
    .to(containerWrapThreeBefore, {
        duration: .3,
        cssRule: {
            right: 0,
            opacity: 1
        } 
    }, ">")
    .to(containerThreeAfter, {
        duration: .3,
        cssRule: {
            bottom: 0,
            opacity: 1
        } 
    }, ">")
    
    .to(containerThreeAfter, {
        duration: .3,
        cssRule: {
            bottom: '100%'
        } 
    }, ">.3")
    .to(containerWrapThreeBefore, {
        duration: .3,
        cssRule: {
            right: '100%'
        } 
    }, ">")
    
    /* WHY IS THIS ONE NOT WORKING?? */
    .to(containerWrapThreeAfter, {
        duration: .3,
        cssRule: {
            right: '100%' /* this one goes opposite so NOT left: '100% */
        } 
    }, ">-.2") /* "<" doesnt work -- glitchy */
    
    .to(containerThreeBefore, {
        duration: .5,
        cssRule: {
            top: '100%'
        } 
    }, ">-.15")
    
    
    
    tl.play('myLabel')
    
}



tl.timeScale(.75);
//GSDevTools.create(); /* had to use minifed file to remove error */


window.addEventListener("load", function(event) {
  gsap.set(".container", {autoAlpha:1})
  init(); 
});