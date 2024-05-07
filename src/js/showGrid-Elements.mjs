function showElements() {

const gridElementsParent = document.querySelector('.elementsParent');
const btnShowElements = document.querySelector('.btn-show-elements');
const text = btnShowElements.querySelector('span');
const icon = btnShowElements.querySelector('i');
let isHidden = false;

console.log(gridElementsParent);
console.log(btnShowElements);
console.log(text);
console.log(icon);

function showElementsAndHide() {
  if(isHidden) {
    gridElementsParent.style.height = '170px';
    text.textContent = 'Показать все';
    icon.classList.add('icon-open');
  } else {
    gridElementsParent.style.height = 'auto';
    text.textContent = 'скрыть';
    icon.classList.add('icon-hide');
    icon.classList.remove('icon-open')
  }

  isHidden = !isHidden;
}

btnShowElements.addEventListener('click', showElementsAndHide);

}

export default showElements;