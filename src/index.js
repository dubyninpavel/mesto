import './pages/index.css';

import { popupProfileForm, popupName, popupSubline, popupAddCards, popupCardForm, editButton, addButton, popupEditProfile, popupPhoto, profileName, profileSubline, cardList, cardTemplate } from "./scripts/utils/constants.js";
import { initialCards } from "./scripts/utils/dataCards.js";
import { dataValidation } from "./scripts/utils/dataValidation.js";
import Card from "./scripts/components/Card.js";
import FormValidator from "./scripts/components/FormValidator.js";
import Section from "./scripts/components/Section.js";
import PopupWithImage from "./scripts/components/PopupWithImage.js";
import PopupWithForm from "./scripts/components/PopupWithForm.js";
import UserInfo from "./scripts/components/UserInfo.js";

const cardGridList = new Section({
    data: initialCards,
    renderer: (item) => {
        const card = new Card({
            data: item,
            handleCardClick: () => {
                const selectCard = new PopupWithImage({ data: item }, popupPhoto);
                selectCard.openPopup();
            }
        }, cardTemplate);
        const cardElement = card.createCardTemplate();
        cardGridList.addItem(cardElement);
    }
}, cardList);

cardGridList.renderItems();

const formProfileValidator = new FormValidator(dataValidation, popupProfileForm);
formProfileValidator.enableValidation();
const openPopupEditProfile = new PopupWithForm({ 
    popupSelector: popupEditProfile,
    handleForm: (dataPopup) => {
        const profile = new UserInfo(dataPopup);
        profile.setUserInfo();
    }
});

editButton.addEventListener('click', () => {
    openPopupEditProfile.setEventListeners();
    popupName.value = profileName.textContent;
    popupSubline.value = profileSubline.textContent;
});

const formCardValidator = new FormValidator(dataValidation, popupCardForm);
formCardValidator.enableValidation();

const openPopupAddCard = new PopupWithForm({
    popupSelector: popupAddCards,
    handleForm: (dataPopup) => {
        const newCard = new Card({
            data: dataPopup,
            handleCardClick: () => {
                const selectCard = new PopupWithImage({ data: dataPopup }, popupPhoto);
                selectCard.openPopup();
            }
        }, cardTemplate);
        const cardElement = newCard.createCardTemplate();
        cardGridList.addItem(cardElement);
    }
});

addButton.addEventListener('click', () => {
    openPopupAddCard.setEventListeners();
});