function showText() {
  const elementsParent = document.querySelector('.textParent');
  const btnShowTextContent = document.querySelector('.btn-show-text');
  const text = btnShowTextContent.querySelector('span');
  const icon = btnShowTextContent.querySelector('i');
  let isHidden = false;
  

  console.log(elementsParent);
  console.log(btnShowTextContent);
  console.log(text);
  console.log(icon);

  function showAndHide() {

    if(isHidden) {
      elementsParent.style.height = '5.9rem';
    } else {
      elementsParent.style.height = 'auto';
    }

    isHidden = !isHidden;
  }

  btnShowTextContent.addEventListener('click', showAndHide)

}

export default showText;