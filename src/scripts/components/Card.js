export default class Card {
  constructor ({ data, myUserId, handleCardClick, delCardLike, setCardLike, handleCardDelete}, cardTemplate) {
    this._dataCard = data;
    this._myUserId = myUserId;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
    this._delCardLike = delCardLike;
    this._setCardLike = setCardLike;
    this._handleCardDelete = handleCardDelete;
    this._cardElement = this.createCardTemplate();
    this._cardPhoto = this._cardElement.querySelector(".cards__photo");
  }

  createCardTemplate() {
    this._cardElement = this._cardTemplate.content.cloneNode(true);
    this._cardPhoto = this._cardElement.querySelector(".cards__photo");
    const cardPlaceName = this._cardElement.querySelector(".cards__place");
    this._cardCountLike = this._cardElement.querySelector(".cards__count-likes")
    const cardDelete = this._cardElement.querySelector(".cards__delete-button")
    this.cardLikeButton = this._cardElement.querySelector(".cards__like");
    if (this._myUserId === this._dataCard.owner._id) {
      cardDelete.classList.add("cards__delete-button_active");
    }
    this._dataCard.likes.forEach((item) => {
      if (item._id === this._myUserId && this.cardLikeButton !== undefined) {
        this.cardLikeButton.classList.add("cards__like_active");
      }
    })
    this._cardPhoto.setAttribute("src", this._dataCard.link);
    this._cardPhoto.setAttribute("alt", this._dataCard.name);
    cardPlaceName.textContent = this._dataCard.name;
    this._cardCountLike.textContent = this.countLike(this._dataCard);
    this._setEventListener();
    return this._cardElement;
  }

  getIdCard() {
    return this._dataCard._id;
  }

  countLike(dateCard) {
    return dateCard.likes.length;
  }

  _setEventListener() {
    const cardLikeButton = this._cardElement.querySelector(".cards__like");
    const deleteButton = this._cardElement.querySelector('.cards__delete-button');
    this._cardItem = this._cardElement.querySelector(".cards__item");

    cardLikeButton.addEventListener('click', () => {
      if (cardLikeButton.classList.contains("cards__like_active")) {
        this._delCardLike(this._cardCountLike);
      } else {
        this._setCardLike(this._cardCountLike);
      }
    });
    
    deleteButton.addEventListener('click', () => {
      this._handleCardDelete(this);
    });

    this._cardPhoto.addEventListener('click', () => {
      this._handleCardClick();
    });
  }

  deleteCardElement() {
    this._cardItem.remove();
    this._cardItem = null;
  }

  likeCard() {
    this.cardLikeButton.classList.toggle("cards__like_active");
  }
}