
let lquote = document.querySelector('.lquote');
let rquote = document.querySelector('.rquote');
let not = document.querySelector('.not');
let conventional = document.querySelector('.conventional');

let tl = gsap.timeline();
let duration = 2;


function init() {
    
    tl.from(lquote, {yPercent: -100, duration: duration})
    .from(rquote, {yPercent: 100, duration: duration}, "<")
    .from(not, {scale: 7, duration: duration, ease: "power2.in"}, "<0.7")
    .from(not, {opacity: 0, duration: 1}, "<0.7")
    .from(conventional, {yPercent: 100, opacity: 0, duration: 1.2, ease: "power1.in"}, "<1")
    
}




window.addEventListener("load", function(event) {
  gsap.set(".container", {autoAlpha:1})
  init(); 
});