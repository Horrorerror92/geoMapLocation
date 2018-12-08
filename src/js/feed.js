import { form } from './form'
import { closeCross } from './closeCross'
import { buttonAdd } from './buttonAdd'



function feed(popup) {

  popup = document.querySelector('.popup');
  popup.setAttribute('style', `left: ${0}px; top: ${0}px;`);
  popup.innerHTML = form();
  closeCross(popup);
  buttonAdd();


}

export {
  feed
}