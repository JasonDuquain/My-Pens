

let sections = document.querySelectorAll('.main-section');

if ('IntersectionObserver' in window) {
    let options = {
        threshold: 0,
        rootMargin: '0px 0px -50% 0px'
    };

    const changeNav = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                document.querySelector('.active').classList.remove('active');
                var id = entry.target.getAttribute('id');
                var newLink = document.querySelector(`[href="#${id}"]`).classList.add('active');
            }
        });
    };

    const observer = new IntersectionObserver(changeNav, options);

    sections.forEach((section) => {
        observer.observe(section);
    }); 
} else {
    /****** FALLBACK FOR OLDER BROWSERS *****/
    window.addEventListener('scroll', function(e) {
        Array.prototype.slice.call(sections).forEach(function(el) {
            if (el.getBoundingClientRect().top <= window.innerHeight / 2) {
                document.querySelector('.active').classList.remove('active');
                var id = el.getAttribute('id');
                var newLink = document.querySelector(`[href="#${id}"]`).classList.add('active');
            }
        });
    });
}


