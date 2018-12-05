// including styles
import './style/index.css';

//including templates
import render from './templates/friends.hbs';

//including js
import { dnd, examplepublic } from './js/dnd'; 

console.log('index works');

const container = document.querySelector('.container');

const items = [
  {name: 'gsg',  lastname: 'lasr'},
  {name: 'sdds',  lastname: 'sdad'},
  {name: 'gqeqwe',  lastname: 'lasdasdr'},

];

container.innerHTML = render({items});

dnd();
examplepublic();
