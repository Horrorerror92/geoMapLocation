import { handlerForm} from './handlerForm'

function buttonAdd(){

  let btnAdd = document.querySelector('.form__btn');

    //let popup = document.querySelector('.popup');

    btnAdd.addEventListener('click', (e) => {
      e.preventDefault();
        
      //popup.setAttribute('id' , 'message');
      handlerForm();
      document.querySelector('.form').reset();
    
  });

}

export {
  buttonAdd
}