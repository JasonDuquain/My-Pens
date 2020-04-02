
gsap.set(".container", {autoAlpha:0.01}) /* attempt to fix pause at beginning */

let imageWrap = document.querySelector('.image-wrap');
let paraWrap = document.querySelector('.para-wrap');
let triangle = document.querySelector('.triangle');

let customEase = CustomEase.create("custom", "M0,0 C0,0 0.03971,0.12962 0.04815,0.21103 0.0682,0.40454 0.06143,0.53157 0.07511,0.72484 0.07662,0.7462 0.08061,0.76176 0.08843,0.78013 0.09441,0.79418 0.10164,0.80623 0.11371,0.8155 0.15009,0.84347 0.18056,0.86772 0.22481,0.88498 0.30156,0.91491 0.35825,0.92622 0.44415,0.94437 0.53861,0.96434 0.59479,0.97388 0.69095,0.98351 0.81006,0.99543 1,1 1,1 ");

let tl = gsap.timeline();

function init() {
  
    tl.progress(1).progress(0); /* attempt to fix pause at beginning */
  
    /* dont animate 'left' but is there a way to not position this absolutely */
    tl.from('.image--two-station', {
        left: '-30%', 
        duration: .7,
        ease: 'linear'
    })
        /* the triangle is the width of the container but the triangle clip-path is only 40% or so width */
    .fromTo(triangle, {
        x: '-50%'
    }, {
        x: 0,
        duration: .7
    }, "<")
    .fromTo(imageWrap, {
        x: '-380%'
    }, {
        x: '-220%',
        duration: 3,
        ease: customEase
    }, "<")
    .fromTo(paraWrap, {
        x: '-320%'
    }, {
        x: '-300%',
        duration: 1.7
    }, "<-.2")   
    .fromTo(imageWrap, {
        x: '-220%'
    }, {
        x: '-110%',
        duration: 2,
        ease: customEase
    }, ">")
    .to(paraWrap, {
        x: '-200%',
        duration: 1
    }, "<.1")
    
    .fromTo(imageWrap, {
        x: '-100%'
    }, {
        x: '0%',
        duration: 2.5,
        ease: customEase
    })
    .to(paraWrap, {
        x: '-100%',
        duration: 1
    }, "<")
    .fromTo(imageWrap, {
        x: '0%'
    }, {
        x: '100%',
        duration: 1
    })
    .to(paraWrap, {
        x: '0%',
        duration: 1.2
    }, "<")
    .to('.image--two-station', {
        x: '170%', /* was 'left' */
        duration: .8
    }, ">.5")
    .to(paraWrap, {
        x: '100%',
        duration: .7
    }, "<")
    .to('.triangle--image', {
        left: 0,
        duration: 1
    }, "<.5")
    .to('.final-para', {
        left: 0,
        duration: 1.4
    }, "<")
    
    //tl.timeScale(.4);
    //tl.progress(0.65).pause();
    
}

//GSDevTools.create();


window.addEventListener("load", function(event) {
  gsap.set(".container", {autoAlpha:1})
  init(); 
});