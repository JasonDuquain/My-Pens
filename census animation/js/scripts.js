

let headingOneSpan = document.querySelector('.span--one');
let headingOneSpanTwo = document.querySelector('.span--two');
let imageOne = document.querySelector('.image--one');

let imageTwo = document.querySelector('.image--two');
let headingTwo = document.querySelector('.heading--two');
let headingTwoSpan = document.querySelector('.span--three');
let headingTwoSpanTwo = document.querySelector('.span--four');

let imageThree = document.querySelector('.image--three');
let home = document.querySelector('.home');

let imageFour = document.querySelector('.image--four');
let shape = document.querySelector('.shape');
let census = document.querySelector('.census');


function init() {
  
  let tl = gsap.timeline();
  
  tl.fromTo(headingOneSpan, {
    opacity: 0,
    y: 30
  }, {
    opacity: 1,
    y: 0,
    duration: .6
  })
  
  .add('labelone')
  
  .fromTo(headingOneSpanTwo, {
    opacity: 0,
    y: 30
  }, {
    opacity: 1,
    y: 0,
    duration: .6
  }, "-=.2")
  .fromTo(imageOne, {
    xPercent: 100
  }, {
    xPercent: 0,
    duration: 1.4
  }, "labelone-=.5")
  .fromTo(imageTwo, {
    xPercent: 200
  }, {
    xPercent: 100,
    duration: 1.4
  }, "labelone-=.5")
  
  .fromTo(imageOne, {
    xPercent: 0
  }, {
    xPercent: -100,
    opacity: 0,
    duration: 1.4
  }, "+=.8")
  .fromTo(imageTwo, {
    xPercent: 100,
    opacity: 0
  }, {
    xPercent: 0,
    opacity: 1,
    duration: 1.4
  }, "<")
  
  .to(headingTwo, {
    opacity: 1,
    duration: .1
  }, ">-=.6")
  tl.fromTo(headingTwoSpan, {
    opacity: 0,
    y: 30
  }, {
    opacity: 1,
    y: 0,
    duration: .5
  }, "<+=.1")
  .fromTo(headingTwoSpanTwo, {
    opacity: 0,
    y: 30
  }, {
    opacity: 1,
    y: 0,
    duration: .5
  }, ">-=.2")
  .to(imageThree, {
    bottom: 0,
    duration: .9
  })
  
  .set(imageTwo, { display: 'none' })
  
  .to(home, {
    bottom: 75,
    duration: .9
  }, ">-.3")
  .to(imageFour, {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 60%, 47% 60%, 50% 65%, 53% 60%, 0% 60%)',
    duration: 1
  })
  .to(imageThree, {
    opacity: 0,
    duration: 1
  }, "<+.8")
  .to(shape, {
    opacity: 1,
    top: '45%'
  }, "+=.8")
  
  .to(census, {
    bottom: 75,
    duration: .9
  }, ">-.3")
  
  
  tl.timeScale(1.5);
  
  
}


/*** add the subtle zoom in effect on img 3 and 4 ***/


/*  THIS!!: >-.3   NOT THIS!!: >-=.3   */










window.addEventListener("load", function(event) {
  gsap.set(".wrap", {autoAlpha:1})
  init(); 
});
