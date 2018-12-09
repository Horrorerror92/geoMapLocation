import { feed } from './feed'


function yandexMap (){
  ymaps.ready(init);
  
  function init(){ 
    var myMap = new ymaps.Map("map", {
        center: [52.09, 23.70],
        zoom: 14,
        controls: []
    });

    var myMap;
    let places = [];
    let customItemContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div class="ballon"><a id=ballon__header>{{ properties.balloonContentHeader|raw }}</a>' +
      '<div class=ballon__body>{{ properties.balloonContent|raw }}</div></div>');  
    var clusterer = new ymaps.Clusterer({
      preset: 'islands#invertedBlueClusterIcons',
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
      myMap.geoObjects.events.add('click', function (e) {
  
        let coords = e.get('coords');
        let data = e.get('target').properties._data.balloonContent;
        let items = e.get('target').properties.get('geoObjects');
    
      if (!e.get('target')._clusterListeners) {

        ymaps.geocode(coords).then(function(headerText) {
          feed(e, headerText.geoObjects.get(0).properties._data.name, data)
        });

      } else {

        if(myMap.balloon) {
          let result = '';

          for (let i = 0; i < items.length; i++) {
            result = result + items[i].properties._data.balloonContent;
          }

          document.getElementsByTagName('body')[0].addEventListener('click', function(event) {

            if (event.target.id === "ballon__header") {
              myMap.balloon.close();
              feed(e, event.target.innerText, result);
            }
          });
        }
      }
    });


    myMap.events.add('click', function (e) {
      let coords = e.get('coords');

      ymaps.geocode(coords).then(function (headerText) { 
        feed(e, headerText.geoObjects.get(0).properties._data.name, '');
       
      })
    });
  
    
  }
}


export {
  yandexMap
}