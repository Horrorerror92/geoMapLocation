  const saveCounter = (function(){
    let count = sessionStorage.getItem('counter') || 0;

    return function (item) {
      sessionStorage.setItem(count, item);
      count++;
      sessionStorage.setItem('counter', count);
    }

  })();
 

function buttonAdd(coordinates, headerText, data){

  let btnAdd = document.querySelector('.form__btn');
  

  btnAdd.addEventListener('click', (e) => {

    e.preventDefault();

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
      <span class="popup__msg">${yourfeedback}</span>`;

    
    messages.appendChild(message);
    data = messages.innerHTML;

    let place = new ymaps.Placemark(coordinates.get('coords'), {
      balloonContentHeader: headerText,
      balloonContent: message.innerHTML
    }, {
      openBalloonOnClick: false
    });

    saveCounter([place.geometry._coordinates,
      place.properties._data.balloonContent,
      place.properties._data.balloonContentHeader]);

    }
    else {
      alert('Заполните форму');
    }

    document.querySelector('.form').reset();
    
    });

}

export {
  buttonAdd
}