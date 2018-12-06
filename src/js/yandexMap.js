function yandexMap (){
  ymaps.ready(init);    
  function init(){ 
    var myMap = new ymaps.Map("map", {
        center: [52.09, 23.70],
        zoom: 13
    }); 
  }
}


export {
  yandexMap
}