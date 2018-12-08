function buttonAdd(){

let btnAdd = document.querySelector('.form__btn');
let wrap = document.querySelector('.popup__wrapper');
let popup = document.querySelector('.popup');

btnAdd.addEventListener('click', (e) => {
  e.preventDefault();
  let messages = wrap.children[0];
  let message = document.createElement('div');
  message.classList.add('popup__list');
  
  // if (messages.childNodes[0].textContent === "") {
  //   messages.innerHTML = '';
  // }

  popup.setAttribute('id' , 'message');
  message.innerHTML = `<span class="popup__name"> Hardname </span>
                    <span class="popup__place">no name place</span>
                    <span class="popup__place">${new Date().toISOString().slice(0, 10)}</span>
                    <span class="popup__msg">abrakadabraffd f sfsd  fsdfsdfsdfsdfsdf sd sdfs fsdf fsdfsf </span>
                   `;
  messages.appendChild(message);
  document.querySelector('.form').reset();
});

}

export {
  buttonAdd
}