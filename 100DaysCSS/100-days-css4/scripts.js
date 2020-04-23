let circles = document.querySelectorAll('.chart__line--one circle');
let nums = document.querySelectorAll('.num')

console.log(circles, nums)

circles.forEach(function(el, idx) {
  el.addEventListener('mouseover', function(e) {
    nums[idx].classList.add('num--visible')
  })
})

circles.forEach(function(el, idx) {
  el.addEventListener('mouseout', function(e) {
    nums[idx].classList.remove('num--visible')
  })
})


