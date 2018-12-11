import { form } from './form'
import { closeCross } from './closeCross'
import { buttonAdd } from './buttonAdd'
import { positionForm} from './positionForm'

function feed(coordinates, headerText, data, myMap, clusterer, places) {
  let popup = document.querySelector('.popup');

  popup.setAttribute('style', `left: ${coordinates.get('pagePixels')[0]}px; top: ${coordinates.get('pagePixels')[1]}px;`);
  popup.innerHTML = form(headerText);

  let wrap = document.querySelector('.popup__wrapper');
  let messages = wrap.children[0];

  messages.innerHTML = data;
  closeCross(popup);
  buttonAdd(coordinates, headerText, myMap, clusterer, places);
  positionForm(popup);
}

export {
  feed
}