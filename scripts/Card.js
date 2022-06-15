import { openPopup } from "./index.js";

class Card {

  _name;
  _link;
  _cardTemplate;

  constructor (data, cardTemplate) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplate = cardTemplate;
  }

  createCardTemplate() {
    const cardElement = this._cardTemplate.content.cloneNode(true);
    const cardPhoto = cardElement.querySelector(".cards__photo");
    const cardPlaceName = cardElement.querySelector(".cards__place");
    const cardLikeButton = cardElement.querySelector(".cards__like");
    const deleteButton = cardElement.querySelector('.cards__delete-button');
    cardPhoto.setAttribute("src", this._link);
    cardPhoto.setAttribute("alt", this._name);
    cardPlaceName.textContent = this._name;

    cardLikeButton.addEventListener('click', () => {
      this._handleLikeCard(cardLikeButton);
    });
    
    deleteButton.addEventListener('click', (evt) => {
      this._deleteCard(evt)});

    cardPhoto.addEventListener('click', () => {
      this._openPhoto();
    });
    
    return cardElement;
  }

  _openPhoto() {
    const popupPhoto = document.querySelector(".popup_photo");
    const popupImage = popupPhoto.querySelector(".popup__image");
    const popupText = popupPhoto.querySelector(".popup__text");
    popupImage.setAttribute("src", this._link);
    popupImage.setAttribute("alt", this._name);
    popupText.textContent = this._name;
    openPopup(popupPhoto);
  }

  _deleteCard(evt) {
    const cardElement = evt.target.closest(".cards__item");
    cardElement.remove(); 
  }

  _handleLikeCard(item) {
    item.classList.toggle("cards__like_active");
  }
}

export { Card };