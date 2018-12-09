import { feed } from './feed'
let popup;

function yandexMap (){
  ymaps.ready(init);

  function init(){ 
    var myMap = new ymaps.Map("map", {
        center: [52.09, 23.70],
        zoom: 14
    });

    var myMap;
    let places = [];
    let customItemContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div class="ballon"><a id=ballon_header>{{ properties.balloonContentHeader|raw }}</a>' +
      '<div class=ballon_body>{{ properties.balloonContent|raw }}</div></div>');  
    var clusterer = new ymaps.Clusterer({
      preset: 'islands#invertedVioletClusterIcons',
      clusterDisableClickZoom: true,
      clusterOpenBalloonOnClick: true,
      clusterBalloonContentLayout: 'cluster#balloonCarousel',
      clusterBalloonItemContentLayout: customItemContentLayout,
      clusterBalloonPanelMaxMapArea: 0,
      clusterBalloonContentLayoutWidth: 200,
      clusterBalloonContentLayoutHeight: 130,
      clusterBalloonPagerSize: 3,
      groupByCoordinates: false
    });
    if (sessionStorage.getItem('0')) {
      for (var i = 0; i < sessionStorage.length - 1; i++) {
        let el = sessionStorage.getItem(i).split(',');

        let place = new ymaps.Placemark([
          el[0], el[1]
        ],{
          balloonContentHeader: el[3],
          balloonContent: el[2]
        }, {
          openBalloonOnClick: false
        });


        places.push(place);
        clusterer.add(places);
        myMap.geoObjects.add(clusterer);
      }
    }

  


    myMap.events.add('click', function (e) {
      let coords = e.get('coords');
      
  
      ymaps.geocode(coords).then(function (head) { 
        feed(popup, e, head.geoObjects.get(0).properties._data.name);
        console.log(coords);
        
      })
    });
    

    const saveCounter = (function(){
      let count = sessionStorage.getItem('counter') || 0;
  
      return function (item) {
        sessionStorage.setItem(count, item);
        count++;
        sessionStorage.setItem('counter', count);
      }
  
    })();

  }
}


export {
  yandexMap
}