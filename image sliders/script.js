let index = 0;
let container = document.querySelector(".container");
let imageContainer = document.querySelector(".image-container");
let images = document.querySelectorAll(".image");
let dotContainer = document.querySelector(".dot-container");
let dotArr = [];

for (let i = 0; i < images.length; i++) {
    let dot = document.createElement('span');
    dot.classList.add('dot');
    dotContainer.append(dot);
    dotArr.push(dot);
}

document.querySelector('.next').addEventListener('click', (e) => {
    imageContainer.style.transition = null;
    let image = document.querySelector('.image');
    let imageWidth = image.scrollWidth;
    console.log("before", index)
    index++;
    imageContainer.style.transform = `translateX(${-imageWidth * index}px)`;
    if (index === images.length) {
        index = 0;
        imageContainer.style.transform = `translateX(${-imageWidth * index}px)`;
    }
    console.log("after", index)
    
});

document.querySelector('.prev').addEventListener('click', (e) => {
    imageContainer.style.transition = null;
    let image = document.querySelector('.image');
    let imageWidth = image.scrollWidth;
    console.log("before", index)
    index--;
    imageContainer.style.transform = `translateX(${-imageWidth * index}px)`;
    if (index === -1) {
        index = images.length -1;
        imageContainer.style.transform = `translateX(${-imageWidth * index}px)`;
    }
    console.log("after", index)
    
});


window.addEventListener('resize', (e) => {
    let image = document.querySelector('.image');
    let imageWidth = image.scrollWidth;
    // this next line is needed to fix images appearing partway scrolled
    imageContainer.style.transform = `translateX(${-imageWidth * index}px)`;
    // remove the transition to when they are re-translated they dont animate
    imageContainer.style.transition = 'none';
    images.forEach((el) => {
        el.style.width = '100%';
        el.style.height = '100%';
    });
});

