
let lquote = document.querySelector('.lquote');
let rquote = document.querySelector('.rquote');
let not = document.querySelector('.not');
let conventional = document.querySelector('.conventional');
let never = document.querySelector('.never');
let boring = document.querySelector('.boring');
let containerWrap = document.querySelector('.container-wrap');
let containerWrapTwo = document.querySelector('.container-wrap--two');
let intersection = document.querySelector('.intersection');
let race = document.querySelector('.race');

let tl = gsap.timeline();
let duration = 2;


function init() {
    tl.from(lquote, {yPercent: -100, duration: duration})
    .from(rquote, {yPercent: 100, duration: duration}, "<")
    .from(not, {scale: 7, duration: duration, ease: "power2.in"}, "<0.7")
    .from(not, {opacity: 0, duration: 1}, "<0.7")
    .from(conventional, {yPercent: 100, opacity: 0, duration: 1.2, ease: "power1.in"}, "<1")
    .to(not, {xPercent: -110, duration: 1.5, ease: Power4}, "+=.75")
    .to(never, {right: '16%', duration: 1}, "<.75")
    .to(conventional, {yPercent: 100, opacity: 0, duration: .7, ease: "power1.in"}, "<.65")
    .to(boring, { bottom: '-4%', opacity: 1 }, "<+.5")
    //.to(containerWrap, { display: 'none'})
    //.to(containerWrapTwo, { display: 'block'});
}




//tl.timeScale(.13);
//GSDevTools.create(); /* had to use minifed file to remove error */


window.addEventListener("load", function(event) {
  gsap.set(".container", {autoAlpha:1})
  init(); 
});