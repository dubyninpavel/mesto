export default class Card {
  constructor ({ data, handleCardClick }, cardTemplate) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
    this._cardElement = this.createCardTemplate();
    this._cardPhoto = this._cardElement.querySelector(".cards__photo");
  }

  createCardTemplate() {
    this._cardElement = this._cardTemplate.content.cloneNode(true);
    this._cardPhoto = this._cardElement.querySelector(".cards__photo");
    const cardPlaceName = this._cardElement.querySelector(".cards__place");
    this._cardPhoto.setAttribute("src", this._link);
    this._cardPhoto.setAttribute("alt", this._name);
    cardPlaceName.textContent = this._name;
    this._setEventListener();

    return this._cardElement;
  }

  _setEventListener() {
    const cardLikeButton = this._cardElement.querySelector(".cards__like");
    const deleteButton = this._cardElement.querySelector('.cards__delete-button');
    const cardItem = this._cardElement.querySelector(".cards__item");

    cardLikeButton.addEventListener('click', () => {
      this._handleLikeCard(cardLikeButton);
    });
    
    deleteButton.addEventListener('click', () => {
      this._deleteCard(cardItem);
    });

    this._cardPhoto.addEventListener('click', () => {
      this._handleCardClick();
    });
  }

  _deleteCard(cardItem) {
    cardItem.remove();
    this._cardElement = null;
  }

  _handleLikeCard(item) {
    item.classList.toggle("cards__like_active");
  }
}