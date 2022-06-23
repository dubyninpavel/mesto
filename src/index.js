import './pages/index.css';

import { popupProfileForm, popupNameElement, popupSublineElement, popupAddCards, popupCardForm, editButton, addButton, popupEditProfile, popupPhoto, cardList, cardTemplate } from "./scripts/utils/constants.js";
import { initialCards } from "./scripts/utils/dataCards.js";
import { dataValidation } from "./scripts/utils/dataValidation.js";
import Card from "./scripts/components/Card.js";
import FormValidator from "./scripts/components/FormValidator.js";
import Section from "./scripts/components/Section.js";
import PopupWithImage from "./scripts/components/PopupWithImage.js";
import PopupWithForm from "./scripts/components/PopupWithForm.js";
import UserInfo from "./scripts/components/UserInfo.js";

const popupImage = new PopupWithImage(popupPhoto);

function createCard(item) {
    const newCard = new Card({
        data: item,
        handleCardClick: () => {
            popupImage.open(item);
        }
    }, cardTemplate);
    return newCard;
}

const cardGridList = new Section({
    data: initialCards,
    renderer: (item) => {
        const cardElement = createCard(item).createCardTemplate();
        cardGridList.addItem(cardElement);
    }
}, cardList);

cardGridList.renderItems();

const profile = new UserInfo({nameSelector: ".profile__name", infoSelector: ".profile__subline"});

const formProfileValidator = new FormValidator(dataValidation, popupProfileForm);
formProfileValidator.enableValidation();
const popupProfile = new PopupWithForm({ 
    popupElement: popupEditProfile,
    handleForm: (dataPopup) => {
        profile.setUserInfo(dataPopup);
    }
});

popupProfile.setEventListeners();

editButton.addEventListener('click', () => {
    formProfileValidator.clearErrorsHandler();
    popupProfile.open();
    popupNameElement.value = profile.getUserInfo().name;
    popupSublineElement.value = profile.getUserInfo().information;
});

const formCardValidator = new FormValidator(dataValidation, popupCardForm);
formCardValidator.enableValidation();

const popupAddCard = new PopupWithForm({
    popupElement: popupAddCards,
    handleForm: (dataPopup) => {
        const cardElement = createCard(dataPopup).createCardTemplate();
        cardGridList.addItem(cardElement);
    }
});

popupAddCard.setEventListeners();

addButton.addEventListener('click', () => {
    formCardValidator.clearErrorsHandler();
    popupAddCard.open();
});