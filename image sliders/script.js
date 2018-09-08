let index = 0;
let container = document.querySelector(".container");
let imageContainer = document.querySelector(".image-container");
let images = document.querySelectorAll(".image");
let dotContainer = document.querySelector(".dot-container");
let dotArr = [];

// pretty.jpg is diff aspect ratio so this is needed to ensure all heights are eq
function eqHeightImages() {
    let current = 0;
    images.forEach((el) => {   
        if (el.scrollHeight > current) {
            current = el.scrollHeight;
        }
    });

    images.forEach((el) => el.style.height = `${current}px`);
}

eqHeightImages();

for (let i = 0; i < images.length; i++) {
    let dot = document.createElement('span');
    dot.classList.add('dot');
    dotContainer.append(dot);
    dotArr.push(dot);
    dotArr[0].classList.add('active');
    dotArr[i].style.backgroundImage = `url(${images[i].getAttribute('src')})`;
    
    dot.addEventListener('click', (e) => {
        //console.log("before dot click", index)
        imageContainer.style.transition = null;
        let image = document.querySelector('.image');
        let imageWidth = image.scrollWidth;
        imageContainer.style.transform = `translateX(${-imageWidth * i}px)`;
        removeDotActive();
        e.target.classList.add('active');
        
        //return the index of the dot that was clicked and assign it to the index var
        index = dotArr.findIndex((el) => el === e.target);
        //console.log("after dot click", index)
    })
}




function removeDotActive() {
    for (let i = 0; i < dotArr.length; i++) {
        dotArr[i].classList.remove('active');
    }
}

document.querySelector('.next').addEventListener('click', (e) => {
    imageContainer.style.transition = null;
    let image = document.querySelector('.image');
    let imageWidth = image.scrollWidth;
    //console.log("before", index)
    index++;
    imageContainer.style.transform = `translateX(${-imageWidth * index}px)`;
    if (index === images.length) {
        index = 0;
        imageContainer.style.transform = `translateX(${-imageWidth * index}px)`;
        removeDotActive();
        dotArr[index].classList.add('active');
    }
    removeDotActive();
    dotArr[index].classList.add('active');
    //console.log("after", index)
    
});

document.querySelector('.prev').addEventListener('click', (e) => {
    imageContainer.style.transition = null;
    let image = document.querySelector('.image');
    let imageWidth = image.scrollWidth;
    //console.log("before", index)
    index--;
    imageContainer.style.transform = `translateX(${-imageWidth * index}px)`;
    if (index === -1) {
        index = images.length -1;
        imageContainer.style.transform = `translateX(${-imageWidth * index}px)`;
        removeDotActive();
        dotArr[index].classList.add('active');
    }
    removeDotActive();
    dotArr[index].classList.add('active');
    //console.log("after", index)
    
});


window.addEventListener('resize', (e) => {
    let image = document.querySelector('.image');
    let imageWidth = image.scrollWidth;
    
    // this  is needed to fix images appearing partway scrolled
    imageContainer.style.transform = `translateX(${-imageWidth * index}px)`;
    
    // remove the transition so when they are re-translated they dont animate
    imageContainer.style.transition = 'none';
    images.forEach((el) => {
        el.style.width = '100%';
        el.style.height = '100%';
    });
    
    eqHeightImages();
});

