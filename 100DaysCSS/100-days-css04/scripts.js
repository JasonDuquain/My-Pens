let circles = document.querySelectorAll('.chart__line--one circle');
let nums = document.querySelectorAll('.num');
let circlesTwo = document.querySelectorAll('.chart__line--two circle');
let numsTwo = document.querySelectorAll('.numm');


circles.forEach(function(el, idx) {
  el.addEventListener('mouseover', function(e) {
    nums[idx].classList.add('num--visible')
  });
});

circles.forEach(function(el, idx) {
  el.addEventListener('mouseout', function(e) {
    nums[idx].classList.remove('num--visible')
  });
});

circlesTwo.forEach(function(el, idx) {
  el.addEventListener('mouseover', function(e) {
    numsTwo[idx].classList.add('numm--visible')
  });
});

circlesTwo.forEach(function(el, idx) {
  el.addEventListener('mouseout', function(e) {
    numsTwo[idx].classList.remove('numm--visible')
  });
});



