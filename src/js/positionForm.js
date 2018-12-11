function positionForm(elem) {

  elem.onmousedown = function(e) { 
    let coords = newCoords(elem);
    let shiftX = e.pageX - coords.left;
    let shiftY = e.pageY - coords.top;
    movePopup(e);

    
    function movePopup(e) {
      elem.style.left = e.pageX - shiftX + 'px';
      elem.style.top = e.pageY - shiftY + 'px';
    }
    
    document.onmousemove = function(e) {
      movePopup(e);
    };

    
    elem.onmouseup = function() {
      document.onmousemove = null;
      elem.onmouseup = null;
    };

    
    elem.ondragstart = function() {
      return false;
    };

    function newCoords(elem) {
      const renderBox = elem.getBoundingClientRect();
      return {
        top: renderBox.top + pageYOffset,
        left: renderBox.left + pageXOffset
      };
    }

  }
}

export {
  positionForm
}