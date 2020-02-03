

let imageWrap = document.querySelector('.image-wrap');
let paraWrap = document.querySelector('.para-wrap');
let triangle = document.querySelector('.triangle');

let tl = gsap.timeline();

//tl.set(imageWrap, { opacity: 0 })

function init() {
    //tl.set(imageWrap, { opacity: 1 })
    tl.from('.image--two-station', {
        left: '-30%',
        duration: .7,
        ease: 'linear'
    })
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
        ease: CustomEase.create("custom", "M0,0 C0,0 0.03971,0.12962 0.04815,0.21103 0.0682,0.40454 0.06143,0.53157 0.07511,0.72484 0.07662,0.7462 0.08061,0.76176 0.08843,0.78013 0.09441,0.79418 0.10164,0.80623 0.11371,0.8155 0.15009,0.84347 0.18056,0.86772 0.22481,0.88498 0.30156,0.91491 0.35825,0.92622 0.44415,0.94437 0.53861,0.96434 0.59479,0.97388 0.69095,0.98351 0.81006,0.99543 1,1 1,1 ") 
    }, "<")
    /* the triangle is the width of the container but the triangle clip-path is only 40% or so width */
    .fromTo(paraWrap, {
        x: '-320%'
    }, {
        x: '-300%',
        duration: 1.7
    }, "<-.2")
    //tl.add("now")
    
    .fromTo(imageWrap, {
        x: '-220%'
    }, {
        x: '-110%',
        duration: 2,
        ease: CustomEase.create("custom", "M0,0 C0,0 0.03971,0.12962 0.04815,0.21103 0.0682,0.40454 0.06143,0.53157 0.07511,0.72484 0.07662,0.7462 0.08061,0.76176 0.08843,0.78013 0.09441,0.79418 0.10164,0.80623 0.11371,0.8155 0.15009,0.84347 0.18056,0.86772 0.22481,0.88498 0.30156,0.91491 0.35825,0.92622 0.44415,0.94437 0.53861,0.96434 0.59479,0.97388 0.69095,0.98351 0.81006,0.99543 1,1 1,1 ")
    }, ">")
    .to(paraWrap, {
        x: '-200%',
        duration: 1.2
    }, "<.3")
    
    .fromTo(imageWrap, {
        x: '-100%'
    }, {
        x: '0%',
        duration: 2.5,
        ease: CustomEase.create("custom", "M0,0 C0,0 0.03971,0.12962 0.04815,0.21103 0.0682,0.40454 0.06143,0.53157 0.07511,0.72484 0.07662,0.7462 0.08061,0.76176 0.08843,0.78013 0.09441,0.79418 0.10164,0.80623 0.11371,0.8155 0.15009,0.84347 0.18056,0.86772 0.22481,0.88498 0.30156,0.91491 0.35825,0.92622 0.44415,0.94437 0.53861,0.96434 0.59479,0.97388 0.69095,0.98351 0.81006,0.99543 1,1 1,1 ")
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
        left: '150%',
        duration: 1.3
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
    
    //tl.timeScale(1);
    
    //tl.play("now")
    
}




window.addEventListener("load", function(event) {
  gsap.set(".container", {autoAlpha:1})
  init(); 
});