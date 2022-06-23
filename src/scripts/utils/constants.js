const page = document.querySelector(".page")
const popupPhoto = page.querySelector(".popup_photo");
const ESC__CODE = "Escape";
const popupEditProfile = page.querySelector(".popup_edit-profile");
const popupProfileForm = popupEditProfile.querySelector(".popup__form");
const popupNameElement = popupProfileForm.querySelector(".popup__name");
const popupSublineElement = popupProfileForm.querySelector(".popup__subline");
const cardList = page.querySelector(".cards__list");
const editButton = page.querySelector(".profile__edit-button");
const addButton = page.querySelector(".profile__add-button");
const popupAddCards = page.querySelector(".popup_add-cards");
const popupCardForm =  popupAddCards.querySelector(".popup__form");
const cardTemplate = page.querySelector(".template")

export { popupPhoto, cardList, ESC__CODE, popupNameElement, popupSublineElement, cardTemplate, popupProfileForm, popupEditProfile, editButton, addButton, popupAddCards, popupCardForm };