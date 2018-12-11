function form(headerText) {

  return `<div class="popup__header">
            <img src="./src/image/marker.svg" alt="" class="popup__marker">
            <h4 class="popup__headertext">${headerText}</h4>
            <button class="popup__cross"></button>
          </div>
          <div class="popup__wrapper">
            <div class="popup__description"></div>
            <form action="" class="form" name="popupform">
                <div class="form__headertext">Ваш отзыв</div>
                <div class="form__row">
                    <input placeholder="Ваше имя" class="form__input" type="text" name="yourname"/>
                </div>
                <div class="form__row">
                    <input placeholder="Укажите место" class="form__input" type="text" name="yourplace"/>
                </div>
                <div class="form__row">
                    <textarea class="form__text" placeholder="Поделитесь вашими впечатлениями" name="yourfeedback"/></textarea>
                </div>
                <div class="form__button">
                    <input class="form__btn" type="submit" value="Добавить" />
                </div>
            </form>
          </div>`;

} 

export {
  form
}