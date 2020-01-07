
let text = document.querySelector('h1');

let counter = 0;
let textArray = [
    'This is a new line. I sure hope this works. If so we will switch it out two more times.',
    'this is another new line. The counter value is ' + counter + ' ok do it one more time' ,
    'This is the FINAL LINE. The counter value is ' + counter + ' so this is done --- GREAT.'
];
let colorsArray = ['red', 'white', 'green'];

/* 
split the text twice and set the outer div overflow to hidden for the blinder effect:
 https://greensock.com/forums/topic/19282-split-text-question/
*/
new SplitText(text, { type: "lines", linesClass: "lineChild" });
new SplitText(text, { type: "lines", linesClass: "lineParent" });

function switchText(para) {
    counter++;
    
    if (counter <= textArray.length) {  
      text.textContent = para;
      text.style.color = colorsArray[counter-1];
      new SplitText(text, { type: "lines", linesClass: "lineChild" });
      new SplitText(text, { type: "lines", linesClass: "lineParent" });
      tl.from(".lineChild", {
          y: 50, 
          stagger: .5,
          yoyo: true,
          repeat: 1,
          delay: .25,
          onComplete: switchText,
          onCompleteParams: [textArray[counter]]
       })
    }

}

var tl = gsap.timeline({});
tl.from(".lineChild", {
  y:50, 
  stagger: .5,
  yoyo: true,
  repeat: 1,
  onComplete: switchText,
  onCompleteParams: [textArray[counter]]
  
});




