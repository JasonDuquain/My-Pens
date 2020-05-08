//let circle = document.querySelector('.progress__circle--one');

//console.log(circle.getTotalLength())


let circleOne = document.querySelector('.progress__circle--next--one');
let circleTwo = document.querySelector('.progress__circle--next--two');
let circleThree = document.querySelector('.progress__circle--next--three');
let progressOne = document.querySelector('.progress__percent--one');
let progressTwo = document.querySelector('.progress__percent--two');
let progressThree = document.querySelector('.progress__percent--three');
let circleLength = 276;
let decrementTime = 1.5;
let num = 0;


function moveIt(percent, para, circle, interval) {
  
  let clearIt = setInterval(() => {
    if (circleLength <= percent) {
      clearInterval(clearIt);
    }
    num += .555;
    circleLength -= decrementTime;
    para.textContent = `${num.toFixed(0)}%`
    circle.style.strokeDashoffset = circleLength;
  }, 16)
}

moveIt(75, progressOne, circleOne)
moveIt(131, progressTwo, circleTwo)
moveIt(170, progressThree, circleThree)

  









