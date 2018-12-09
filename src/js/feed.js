import { form } from './form'
import { closeCross } from './closeCross'
import { buttonAdd } from './buttonAdd'
import { positionForm} from './positionForm'



function feed(popup, coordinates, head, data) {
  
  popup = document.querySelector('.popup');
  popup.setAttribute('style', `left: ${coordinates.get('pagePixels')[0]}px; top: ${coordinates.get('pagePixels')[1]}px;`);
  popup.innerHTML = form(head);
  closeCross(popup);
  buttonAdd();

  positionForm(popup);
}

export {
  feed
}