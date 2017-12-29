/******** GET RANDOM CARD IMG ********/
let imgs = document.querySelectorAll('.card__img');

let randNum = () => {
  return Math.floor(Math.random() * 78);
}

for (let item of imgs) {
  let cardImg = `https://source.unsplash.com/collection/413408/${randNum()})`;
  item.setAttribute('src', cardImg);
}

/********* HIGHLIGHT FORM ICON ON FOCUS **********/
let fields = document.querySelectorAll('.form__field input:not([type="submit"]), .form__field select, .form__field textarea');
console.log(fields);

fields.forEach((el) => {
    el.addEventListener('focus', () => {
        el.previousElementSibling.classList.add('js-focus');
    });
});

fields.forEach((el) => {
    el.addEventListener('blur', () => {
        el.previousElementSibling.classList.remove('js-focus');
    });
});

