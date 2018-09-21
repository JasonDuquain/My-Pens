/* Notes:

Improvements: 

-no need to creat animatefirst and animatelast functions
-resetDotActive also sets the active class so it no longer just clears all the dots
*/

/* TODO:

-fix tall height/squished image at narrow widths
-edit auto scroll to re-scroll after 5 second delay when next, prev, or dot is clicked
-maybe add a pause on hover but thats tricky

*/

let imgContainer = document.querySelector('.image-container');
let imgs = document.querySelectorAll('.image');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let dotContainer = document.querySelector('.dot-container');
let dotArr = [];
let index = 0;

let current = 0;

function eqHeights() {
    imgs.forEach((el) => {
        if (el.scrollHeight > current) {
            current = el.scrollHeight;
        }
    });

    imgs.forEach((el) => el.style.height = current + 'px'); 
}

eqHeights();

for (let i = 0; i < imgs.length; i++) {
    let dot = document.createElement('span');
    dot.classList.add('dot');
    dotContainer.append(dot);
    let largeImgSrc = imgs[i].getAttribute('src');
    let smallImgSrc = largeImgSrc.slice(0, largeImgSrc.length - 9) + '.jpg';
    dot.style.backgroundImage = `url(${smallImgSrc})`;
    dot.style.backgroundSize = 'cover';
    dotArr.push(dot);

    dotArr[i].addEventListener('click', function(e) {
        clearInterval(interval);
        imgContainer.style.transition = null;
        let imgWidth = imgs[0].scrollWidth;
        imgContainer.style.transform = `translateX(${-imgWidth * i}px)`;
        index = i;
        resetDotActive();
    })
    
}

dotArr[0].classList.add('active');

//moved this to the img for loop above
/*for (let i = 0; i < dotArr.length; i++) {
    dotArr[i].addEventListener('click', function(e) {
        imgContainer.style.transition = null;
        let imgWidth = imgs[0].scrollWidth;
        imgContainer.style.transform = `translateX(${-imgWidth * i}px)`;
        index = i;
        resetDotActive(e);
    })
}*/

function resetDotActive() {
    dotArr.forEach((el, idx) => {
        el.classList.remove('active');
        if (idx === index) {
           el.classList.add('active'); 
        }
    })
}

prev.addEventListener('click', function(e) {
    clearInterval(interval);
    imgContainer.style.transition = null;
    console.log(`1st line of prev fn index is: ${index}`);
    let imgWidth = imgs[0].scrollWidth;
    index--;
    if (index === -1) {
        imgContainer.style.transition = 'none';
        
        imgContainer.style.transform = `translateX(${-imgWidth * imgs.length}px)`;
        setTimeout(() => {
            imgContainer.style.transition = null;
            imgContainer.style.transform = `translateX(${-imgWidth * index}px)`;
        }, 0)
        index = imgs.length - 1;  
    } else {
        imgContainer.style.transform = `translateX(${-imgWidth * index}px)`;
        resetDotActive();
    }
    interval = setInterval(() => {
        nextImgTimer();
    }, 6000);
    console.log(`last line of prev fn index is: ${index}`);
});

next.addEventListener('click', function (e) {
    clearInterval(interval);
    imgContainer.style.transition = null;
    console.log(`1st line of next fn index is: ${index}`);
    let imgWidth = imgs[0].scrollWidth;
    index++;
    if (index >= imgs.length) {
        imgContainer.style.transition = 'none';
        imgContainer.style.transform = `translateX(${imgWidth}px)`;
        setTimeout(() => {
            imgContainer.style.transition = null;
            imgContainer.style.transform = `translateX(${-imgWidth * index}px)`;
        }, 0)
        index = 0;
    } else {
        imgContainer.style.transform = `translateX(${-imgWidth * index}px)`;
        resetDotActive();
            
    }
    interval = setInterval(() => {
        nextImgTimer();
    }, 6000);
    console.log(`last line of next fn index is: ${index}`);
});

function nextImgTimer(e) {
    imgContainer.style.transition = null;
    console.log(`1st line of next fn index is: ${index}`);
    let imgWidth = imgs[0].scrollWidth;
    index++;
    if (index >= imgs.length) {
        imgContainer.style.transition = 'none';
        imgContainer.style.transform = `translateX(${imgWidth}px)`;
        setTimeout(() => {
            imgContainer.style.transition = null;
            imgContainer.style.transform = `translateX(${-imgWidth * index}px)`;
        }, 0)
        index = 0;
    } else {
        imgContainer.style.transform = `translateX(${-imgWidth * index}px)`;
        resetDotActive();
            
    }
    console.log(`last line of next fn index is: ${index}`);
}

//********fix issue where imgs are very tall at narrow widths
window.addEventListener('resize', function(e) {
    let image = document.querySelector('.image');
    let imageWidth = image.scrollWidth;
    
    // this  is needed to fix images appearing partway scrolled
    imgContainer.style.transform = `translateX(${-imageWidth * index}px)`;
    imgContainer.style.transition = 'none';
    
    imgs.forEach((el, idx) => {
        el.style.width = '100%';
        el.style.height = '100%';
        
    });
    
    eqHeights(); // why does this make it so tall at narrow widths?
});

let interval = setInterval(() => {
    nextImgTimer();
}, 2000);















