
let stars = document.querySelectorAll('.stars__link');
let phrase = document.querySelector('.stars-phrase');

/* using a variation of Chris Ferdinandi's get-siblings.js script (https://gist.github.com/cferdinandi/6203237)  */        
var getNextSiblings = function (elem) {
    var siblings = [];
    var sibling = elem;
    for ( ; sibling; sibling = sibling.nextElementSibling ) 
          siblings.push( sibling );
    return siblings;
}

var getPrevSiblings = function (elem) {
    var siblings = [];
    var sibling = elem;
    for ( ; sibling; sibling = sibling.previousElementSibling ) 
          siblings.push( sibling );
    return siblings;
}

stars.forEach((el, idx) => {
    el.addEventListener('click', (e) => { 
        let nextSibs = getNextSiblings(el);
        nextSibs.forEach((sib) => {
            sib.children[0].classList.add('js-clear');
            sib.children[0].classList.remove('js-fill');
        });
        let prevSibs = getPrevSiblings(el);
        prevSibs.forEach((sib) => {
            sib.children[0].classList.add('js-fill');
        });
        
        if (stars[4].children[0].classList.contains('js-fill')) {
            phrase.textContent = ' 5 - BEST';
        }
        
        if (stars[3].children[0].classList.contains('js-fill') && !stars[3].nextElementSibling.children[0].classList.contains('js-fill')) {
            phrase.textContent = '4 - GREAT';
        }
        
        if (stars[2].children[0].classList.contains('js-fill') && !stars[2].nextElementSibling.children[0].classList.contains('js-fill')) {
            phrase.textContent = '3 - GOOD';
        }
        
        if (stars[1].children[0].classList.contains('js-fill') && !stars[1].nextElementSibling.children[0].classList.contains('js-fill')) {
            phrase.textContent = '2 - OK';
        }
        
        if (stars[0].children[0].classList.contains('js-fill') && !stars[0].nextElementSibling.children[0].classList.contains('js-fill')) {
            phrase.textContent = '1 - WORST';
        }
        
        
        
    
    });
    
    
    
});

