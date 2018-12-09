import { form } from './form'
import { closeCross } from './closeCross'
import { buttonAdd } from './buttonAdd'
import { positionForm} from './positionForm'



function feed(coordinates, headerText, data) {
  
  let popup = document.querySelector('.popup');
  popup.setAttribute('style', `left: ${coordinates.get('pagePixels')[0]}px; top: ${coordinates.get('pagePixels')[1]}px;`);
  popup.innerHTML = form(headerText);
  closeCross(popup);
  buttonAdd(coordinates, headerText, data);
  positionForm(popup);
  

}

export {
  feed
}