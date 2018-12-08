import { feed } from './feed'
let popup;

function yandexMap (){
  ymaps.ready(init);    
  function init(){ 
    var myMap = new ymaps.Map("map", {
        center: [52.09, 23.70],
        zoom: 16
    });

    

    myMap.events.add('click', function (e) {
      let coords = e.get('coords');
      

      ymaps.geocode(coords).then(function (res) {
        feed(popup);
        console.log(coords);
              
      })
    });
  }
}


export {
  yandexMap,
  popup
}