function closeCross(popup) {
  let close = document.querySelector('.popup__cross');

  close.addEventListener('click',() => {
    popup.setAttribute('style' , `left: ${-300}%;`);
  })
}

export {
  closeCross
}