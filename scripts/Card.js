import { openPopup } from "./Popup.js";
import { popupPhoto, popupImage, popupText } from "./constants.js";

class Card {

  constructor (data, cardTemplate) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplate = cardTemplate;
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
      this._openPhoto();
    });
    return this._cardElement;
  }

  _openPhoto() {
    popupImage.setAttribute("src", this._link);
    popupImage.setAttribute("alt", this._name);
    popupText.textContent = this._name;
    openPopup(popupPhoto);
  }
  
  _deleteCard(cardItem) {
    cardItem.remove();
    this._cardElement = null;
  }

  _handleLikeCard(item) {
    item.classList.toggle("cards__like_active");
  }
}

export { Card };