const page = document.querySelector(".page")
const popupPhoto = page.querySelector(".popup_photo");
const popupImage = popupPhoto.querySelector(".popup__image");
const popupText = popupPhoto.querySelector(".popup__text");
const ESC__CODE = "Escape";
const popupEditProfile = page.querySelector(".popup_edit-profile");
const profileName = page.querySelector(".profile__name");
const profileSubline = page.querySelector(".profile__subline");
const popupProfileForm = popupEditProfile.querySelector(".popup__form");
const popupName = popupProfileForm.querySelector(".popup__name");
const popupSubline = popupProfileForm.querySelector(".popup__subline");
const cardList = page.querySelector(".cards__list");
const editButton = page.querySelector(".profile__edit-button");
const addButton = page.querySelector(".profile__add-button");
const popupAddCards = page.querySelector(".popup_add-cards");
const popupCardForm =  popupAddCards.querySelector(".popup__form");
const cardTemplate = page.querySelector(".template")


export { page, popupPhoto, cardList, popupImage, popupText, ESC__CODE, 
        popupName, popupSubline, profileName, profileSubline, cardTemplate,
        popupProfileForm, popupEditProfile, editButton, addButton, 
        popupAddCards, popupCardForm };