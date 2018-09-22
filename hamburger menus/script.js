
let hamburgers = document.querySelectorAll('div[class*="burger-"], .burgerthree-wrap, .burgerfive-wrap');

hamburgers.forEach((el) => el.addEventListener('click', (e) => el.classList.toggle('active')));








