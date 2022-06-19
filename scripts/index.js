import { initialCards } from "./DataCards.js";
import { Card } from "./Card.js";
import { FormValidator, dataValidation } from "./FormValidator.js";
import { openPopup, closePopup } from "./Popup.js";
import { page } from "./constants.js";

const editButton = page.querySelector(".profile__edit-button");
const addButton = page.querySelector(".profile__add-button");
const popupEditProfile = page.querySelector(".popup_edit-profile");
const popupAddCards = page.querySelector(".popup_add-cards");
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

function changeProfileName() {
    const newPopupName = popupName.value;
    profileName.textContent = newPopupName;
    const newPopupSubline = popupSubline.value;
    profileSubline.textContent = newPopupSubline;
}

function handleProfileFormSubmit() {
    changeProfileName();
    closePopup(popupEditProfile);
    
}

function handleProfileFormClear() {
    popupName.value = profileName.textContent;
    popupSubline.value = profileSubline.textContent;
}

function createCard(date, cardTemplate) {
    const newCard = new Card(date, cardTemplate);
    return newCard.createCardTemplate();
}

function handleAddCardFormSubmit() {
    cardList.prepend(createCard({name: popupNameCard.value, link: popupLinkCard.value}, cardTemplate));
    closePopup(popupAddCards);
    popupCardForm.reset();
}

initialCards.forEach((card) => {
    cardList.prepend(createCard(card, cardTemplate));
});

const formProfileValidator = new FormValidator(dataValidation, popupProfileForm);
formProfileValidator.enableValidation();

editButton.addEventListener('click', () => {
    handleProfileFormClear();
    openPopup(popupEditProfile);
});

const formCardValidator = new FormValidator(dataValidation, popupCardForm);
formCardValidator.enableValidation();

addButton.addEventListener('click', () => {
    openPopup(popupAddCards);
});

popupProfileForm.addEventListener('submit', handleProfileFormSubmit);
popupCardForm.addEventListener('submit', handleAddCardFormSubmit);