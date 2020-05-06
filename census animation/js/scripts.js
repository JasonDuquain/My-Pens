

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

let finalScreen = document.querySelector('.final--screen');
let startHere = document.querySelector('.cell--one--para:last-of-type');
let cellTwoWrap = document.querySelector('.cell--two-wrap');
let line = document.querySelector('.line');



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
    duration: .4
  }, "<+=.1")
  .fromTo(headingTwoSpanTwo, {
    opacity: 0,
    y: 30
  }, {
    opacity: 1,
    y: 0,
    duration: .4
  }, ">-=.2")
  .to(imageThree, {
    bottom: 0,
    duration: .8
  }, "+=1")
  .to(imageThree, {
    scale: 1.02,
    duration: 2.4
  })
  
  .set(imageTwo, { display: 'none' })
  .set('.heading--three', { display: 'none' })
  .set('.heading--two', { display: 'none' })
  
  .to(home, {
    bottom: 75,
    duration: .9
  }, "<-1.5")
  
  .to(imageFour, {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 60%, 47% 60%, 50% 65%, 53% 60%, 0% 60%)',
    duration: 1
  }, "-=.8")
  .to(imageThree, {
    opacity: 0,
    duration: 1
  }, "<+.8")
  
  .add('labelthree')
  
  .to(imageFour, {
    scale: 1.02,
    duration: 1.5
  })
  
  
  
  
  .to(shape, {
    opacity: 1,
    top: '45%'
  }, "<")
  
  .to(census, {
    bottom: 35,
    opacity: 1,
    duration: .9
  }, ">+.2")
  
  
  
  .to(finalScreen, {
    y: 0,
    duration: .6
  }, "+=1")
  .fromTo(line, {
    opacity: 0,
    scaleY: 0
  }, {
    opacity: 1,
    scaleY: 1,
    duration: .5
  })
  .fromTo(startHere, {
    opacity: 0,
    x: 100
  }, {
    opacity: 1,
    x: 0,
    duration: .5
  }, "<+.2")
  .fromTo(cellTwoWrap, {
    opacity: 0,
    x: -100
  }, {
    opacity: 1,
    x: 0,
    duration: .5
  }, "<")
  
  
  //tl.play('labelthree')
  //tl.timeScale(.2);
  
  
}



/*  THIS!!: >-.3   NOT THIS!!: >-=.3   */

window.addEventListener("load", function(event) {
  gsap.set(".wrap", {autoAlpha:1})
  init(); 
});
