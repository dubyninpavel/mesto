/*const page = document.querySelector(".page")
const editButton = page.querySelector(".profile__edit-button");
const addButton = page.querySelector(".profile__add-button");
const popup = page.querySelector(".popup");
const popupEditProfile = page.querySelector(".popup_edit-profile");
const popupAddCards = page.querySelector(".popup_add-cards");
const popupPhoto = page.querySelector(".popup_photo");
const popupCardForm =  popupAddCards.querySelector(".popup__form");
const popupNameCard = popupAddCards.querySelector(".popup__name");
const popupLinkCard = popupAddCards.querySelector(".popup__subline");
const cardTemplate = page.querySelector(".template")
const closeButtonPopupProfile = popupEditProfile.querySelector(".popup__close");
const closeButtonPopupCards = popupAddCards.querySelector(".popup__close");
const closeButtonPopupPhoto = popupPhoto.querySelector(".popup__close");
const popupProfileForm = popupEditProfile.querySelector(".popup__form");
const popupName = popupProfileForm.querySelector(".popup__name");
const popupSubline = popupProfileForm.querySelector(".popup__subline");
const profileName = page.querySelector(".profile__name");
const profileSubline = page.querySelector(".profile__subline");
const cardList = page.querySelector(".cards__list");
const openButtonAddCard = popupAddCards.querySelector(".popup__button");
const ESC__CODE = "Escape";

function checkPressEsc(evt) {
    if (evt.key === ESC__CODE) {
        const openedPopup = page.querySelector(".popup_is-active");
        closePopup(openedPopup);
    }
}

function checkPressClosePopup(evt) {
    const checkTargetOverlay = evt.target.classList.contains("popup_is-active");
    const checkTargetButtonClose = evt.target.classList.contains("popup__close");
    if (checkTargetOverlay) {
        closePopup(evt.target);
    } else if (checkTargetButtonClose) {
        closePopup(evt.currentTarget);
    }
}

function openPopup(item) {
    item.classList.add("popup_is-active");
    item.addEventListener('mousedown', checkPressClosePopup);
    page.addEventListener('keydown', checkPressEsc);
}

function closePopup(item) {
    item.classList.remove("popup_is-active");
    item.removeEventListener('mousedown', checkPressClosePopup);
    page.removeEventListener('keydown', checkPressEsc);
}

function changeProfileName() {
    const newPopupName = popupName.value;
    profileName.textContent = newPopupName;
    const newPopupSubline = popupSubline.value;
    profileSubline.textContent = newPopupSubline;
}

function deleteCard(event) {
    const cardElement = event.target.closest(".cards__item");
    cardElement.remove(); 
}

function openPhoto(item) {
    const popupImage = popupPhoto.querySelector(".popup__image");
    const popupText = popupPhoto.querySelector(".popup__text");
    popupImage.setAttribute("src", item.link);
    popupImage.setAttribute("alt", item.name);
    popupText.textContent = item.name;
    openPopup(popupPhoto);
}

function handleLikeCard(item) {
    item.classList.toggle("cards__like_active");
}

function handleProfileFormSubmit() {
    changeProfileName();
    closePopup(popupEditProfile);
    
}

function createCardTemplate(item) {
    const cardElement = cardTemplate.content.cloneNode(true);
    const cardPhoto = cardElement.querySelector(".cards__photo");
    const cardPlaceName = cardElement.querySelector(".cards__place");
    const cardLikeButton = cardElement.querySelector(".cards__like");
    const deleteButton = cardElement.querySelector('.cards__delete-button');
    cardPhoto.setAttribute("src", item.link);
    cardPhoto.setAttribute("alt", item.name);
    cardPlaceName.textContent = item.name;

    cardLikeButton.addEventListener('click', () => {
        handleLikeCard(cardLikeButton);
    });
    
    deleteButton.addEventListener('click', deleteCard);

    cardPhoto.addEventListener('click', () => {
        openPhoto(item);
    });
    
    return cardElement;
}

function handleProfileFormClear() {
    popupName.value = profileName.textContent;
    popupSubline.value = profileSubline.textContent;
}

function renderCard(card, place) {
    place.prepend(createCardTemplate(card));
}

function handleAddCard() {
    const newCard = {name: popupNameCard.value, link: popupLinkCard.value};
    renderCard(newCard, cardList);
}

function handleAddCardFormSubmit() {
    handleAddCard();
    closePopup(popupAddCards);
    popupCardForm.reset();
    openButtonAddCard.setAttribute('disabled', true);
    openButtonAddCard.classList.add("popup__button_disabled");
}

initialCards.forEach((card) => {
    renderCard(card, cardList);
});

editButton.addEventListener('click', () => {
    handleProfileFormClear();
    openPopup(popupEditProfile);
});

addButton.addEventListener('click', () => {
    openPopup(popupAddCards);
});

popupProfileForm.addEventListener('submit', handleProfileFormSubmit);
popupCardForm.addEventListener('submit', handleAddCardFormSubmit);

//fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
*/


import { initialCards } from "./DataCards.js";
import { Card } from "./Card.js";
import { FormValidator, dataValidation } from "./FormValidator.js";


const page = document.querySelector(".page")
const editButton = page.querySelector(".profile__edit-button");
const addButton = page.querySelector(".profile__add-button");
const popup = page.querySelector(".popup");
const popupEditProfile = page.querySelector(".popup_edit-profile");
const popupAddCards = page.querySelector(".popup_add-cards");
const popupPhoto = page.querySelector(".popup_photo");
const popupCardForm =  popupAddCards.querySelector(".popup__form");
const popupNameCard = popupAddCards.querySelector(".popup__name");
const popupLinkCard = popupAddCards.querySelector(".popup__subline");
const cardTemplate = page.querySelector(".template")
const popupProfileForm = popupEditProfile.querySelector(".popup__form");
const popupName = popupProfileForm.querySelector(".popup__name");
const popupSubline = popupProfileForm.querySelector(".popup__subline");
const profileName = page.querySelector(".profile__name");
const profileSubline = page.querySelector(".profile__subline");
const cardList = page.querySelector(".cards__list");
const openButtonAddCard = popupAddCards.querySelector(".popup__button");
const ESC__CODE = "Escape";

function changeProfileName() {
    const newPopupName = popupName.value;
    profileName.textContent = newPopupName;
    const newPopupSubline = popupSubline.value;
    profileSubline.textContent = newPopupSubline;
}

function checkPressEsc(evt) {
    if (evt.key === ESC__CODE) {
        const openedPopup = page.querySelector(".popup_is-active");
        closePopup(openedPopup);
    }
}

function checkPressClosePopup(evt) {
    const checkTargetOverlay = evt.target.classList.contains("popup_is-active");
    const checkTargetButtonClose = evt.target.classList.contains("popup__close");
    if (checkTargetOverlay) {
        closePopup(evt.target);
    } else if (checkTargetButtonClose) {
        closePopup(evt.currentTarget);
    }
}

function closePopup(item) {
    item.classList.remove("popup_is-active");
    item.removeEventListener('mousedown', checkPressClosePopup);
    page.removeEventListener('keydown', checkPressEsc);
}

function handleProfileFormSubmit() {
    changeProfileName();
    closePopup(popupEditProfile);
    
}

function handleProfileFormClear() {
    popupName.value = profileName.textContent;
    popupSubline.value = profileSubline.textContent;
}

function openPopup(item) {
    item.classList.add("popup_is-active");
    item.addEventListener('mousedown', checkPressClosePopup);
    page.addEventListener('keydown', checkPressEsc);
}

function handleAddCard() {
    const newCard = new Card({name: popupNameCard.value, link: popupLinkCard.value}, cardTemplate);
    renderCard(newCard, cardList);
}

function handleAddCardFormSubmit() {
    handleAddCard();
    closePopup(popupAddCards);
    popupCardForm.reset();
    openButtonAddCard.setAttribute('disabled', true);
    openButtonAddCard.classList.add("popup__button_disabled");
}

function renderCard(card, place) {
    place.prepend(card.createCardTemplate());
}

initialCards.forEach((card) => {
    const item = new Card(card, cardTemplate);
    renderCard(item, cardList);
});


editButton.addEventListener('click', () => {
    handleProfileFormClear();
    const formProfileValidator = new FormValidator(dataValidation, popupProfileForm);
    formProfileValidator.enableValidation();
    openPopup(popupEditProfile);
});

addButton.addEventListener('click', () => {
    const formCardValidator = new FormValidator(dataValidation, popupCardForm);
    formCardValidator.enableValidation();
    openPopup(popupAddCards);
});

popupProfileForm.addEventListener('submit', handleProfileFormSubmit);
popupCardForm.addEventListener('submit', handleAddCardFormSubmit);

export { openPopup };