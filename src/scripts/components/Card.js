export default class Card {

  constructor ({ data, handleCardClick }, cardTemplate) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
    this._cardElement = this.createCardTemplate();
  }

  createCardTemplate() {
    this._cardElement = this._cardTemplate.content.cloneNode(true);
    const cardPhoto = this._cardElement.querySelector(".cards__photo");
    const cardPlaceName = this._cardElement.querySelector(".cards__place");
    const cardLikeButton = this._cardElement.querySelector(".cards__like");
    const deleteButton = this._cardElement.querySelector('.cards__delete-button');
    const cardItem = this._cardElement.querySelector(".cards__item");
    cardPhoto.setAttribute("src", this._link);
    cardPhoto.setAttribute("alt", this._name);
    cardPlaceName.textContent = this._name;

    cardLikeButton.addEventListener('click', () => {
      this._handleLikeCard(cardLikeButton);
    });
    
    deleteButton.addEventListener('click', () => {
      this._deleteCard(cardItem);
    });

    cardPhoto.addEventListener('click', () => {
      this._handleCardClick();
    });
    return this._cardElement;
  }

  _deleteCard(cardItem) {
    cardItem.remove();
    this._cardElement = null;
  }

  _handleLikeCard(item) {
    item.classList.toggle("cards__like_active");
  }
}