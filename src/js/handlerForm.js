function handlerForm() {
   
  const form = document.forms.popupform;
  const yourname = form.elements.yourname.value;
  const yourplace = form.elements.yourplace.value;
  const yourfeedback = form.elements.yourfeedback.value;
  let wrap = document.querySelector('.popup__wrapper');
  let messages = wrap.children[0];
  let message = document.createElement('div');

  message.classList.add('popup__list');
  
  if((yourname !=='')&&(yourplace !=='')&&(yourfeedback !=='')) {
    message.innerHTML = `<span class="popup__name">${yourname}</span>
    <span class="popup__place">${yourplace}</span>
    <span class="popup__place">${new Date().toISOString().slice(0, 10)}</span>
    <br>
    <span class="popup__msg">${yourfeedback}</span>
   `;
   messages.appendChild(message);
  }
  else {
    alert('Заполните форму');
  }
  
  
}

export {
  handlerForm
  
}