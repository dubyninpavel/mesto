//import './pages/index.css';

import { popupProfileForm, profileAvatar, popupAvatar, popupFormAvatar, popupDeleteCard, popupNameElement, popupSublineElement, popupAddCards, popupCardForm, editButton, addButton, popupEditProfile, popupPhoto, cardList, cardTemplate } from "./scripts/utils/constants.js";
import { dataValidation } from "./scripts/utils/dataValidation.js";
import Card from "./scripts/components/Card.js";
import FormValidator from "./scripts/components/FormValidator.js";
import Section from "./scripts/components/Section.js";
import PopupWithImage from "./scripts/components/PopupWithImage.js";
import PopupWithForm from "./scripts/components/PopupWithForm.js";
import UserInfo from "./scripts/components/UserInfo.js";
import Api from "./scripts/components/Api.js";
import PopupWithSubmit from "./scripts/components/PopupWithSubmit.js";

let myId = "";

function renderLoading(isLoading, buttonForm, textLoading, text) {
    if (isLoading) {
        buttonForm.textContent = textLoading;
    } else {
        buttonForm.textContent = text;
    }
}

const profile = new UserInfo({nameSelector: ".profile__name", infoSelector: ".profile__subline", imageSelector: ".profile__avatar"});

const dataUser = new Api('https://nomoreparties.co/v1/cohort-43/users/me');
dataUser.getDataUser()
    .then((dataUser) => {
        myId = dataUser._id;
        profile.setUserInfo(dataUser);
    })
    .catch((err) => {
        console.log(err);
    });
    
const popupImage = new PopupWithImage(popupPhoto);

const card = new Api('https://mesto.nomoreparties.co/v1/cohort-43/cards');
card.getCards()
    .then((cardsInfo) => {
        const cardGridList = new Section({
            data: cardsInfo,
            renderer: (item) => {
                const cardElement = createCard(item).createCardTemplate();
                cardGridList.addItem(cardElement);
            }
        }, cardList);
        cardGridList.renderItems();
    })
    .catch((err) => {
        console.log(err);
    });

const popupDelete = new PopupWithSubmit({ 
    popupElement: popupDeleteCard
    });

function createCard(item) {
    const newCard = new Card({
        data: item,
        myUserId: myId,
        handleCardClick: () => {
            popupImage.open(item);
        },
        setCardLike: (cardCountLike) => {
            card.setLikeCard(item._id)
            .then((item) => {
                cardCountLike.textContent = item.likes.length;
                newCard.likeCard();
            })
            .catch((err) => {
                console.log(err);
            })
            
        },
        delCardLike: (cardCountLike) => {
            card.deleteLikeCard(item._id)
            .then((item) => {
                cardCountLike.textContent = item.likes.length;
                newCard.likeCard();
            })
            .catch((err) => {
                console.log(err);
            })
            
        },
        handleCardDelete: (cardInfo) => {
            popupDelete.open();
            popupDelete.setHandleSubmit(() => {
                card.deleteCard(cardInfo._dataCard._id)
                    .then(() => {
                        popupDelete.close();
                        newCard.deleteCardElement();
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
        }
    }, cardTemplate);
    return newCard;
}

const formProfileValidator = new FormValidator(dataValidation, popupProfileForm);
formProfileValidator.enableValidation();
const popupProfile = new PopupWithForm({ 
    popupElement: popupEditProfile,
    handleForm: (dataPopup, buttonForm) => {
        renderLoading(true, buttonForm, "Сохранение...", "");
        dataUser.setDataUser(dataPopup)
            .then((dataUser) => {
                profile.setUserInfo(dataUser);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                renderLoading(false, buttonForm, "", "Сохранить");
            });
    }
});

popupProfile.setEventListeners();

editButton.addEventListener('click', () => {
    formProfileValidator.clearErrorsHandler();
    popupProfile.open();
    popupNameElement.value = profile.getUserInfo().name;
    popupSublineElement.value = profile.getUserInfo().about;
});

const formCardValidator = new FormValidator(dataValidation, popupCardForm);
formCardValidator.enableValidation();

const popupAddCard = new PopupWithForm({
    popupElement: popupAddCards,
    handleForm: (dataPopup, buttonForm) => {
        renderLoading(true, buttonForm, "Сохранение...", "");
        card.addNewCard(dataPopup)
            .then((cardInfo) => {
                const cardElement = createCard(cardInfo).createCardTemplate();
                cardList.append(cardElement);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                renderLoading(false, buttonForm, "", "Создать");
            });
    }
});

popupAddCard.setEventListeners();

addButton.addEventListener('click', () => {
    formCardValidator.clearErrorsHandler();
    popupAddCard.open();
});

const profileApi = new Api('https://mesto.nomoreparties.co/v1/cohort-43/users/me/avatar');

const formAvatarValidator = new FormValidator(dataValidation, popupFormAvatar);
formAvatarValidator.enableValidation();

const popupProfileAvatar = new PopupWithForm({
    popupElement: popupAvatar,
    handleForm: (dataPopup, buttonForm) => {
        renderLoading(true, buttonForm, "Сохранение...", "");
        profileApi.updatePhotoProfile(dataPopup)
            .then((profileInfo) => {
               profileAvatar.setAttribute('src', profileInfo.avatar);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                renderLoading(false, buttonForm, "", "Сохранить");
            });
    }
});

popupProfileAvatar.setEventListeners();

profileAvatar.addEventListener('click', () => {
    formCardValidator.clearErrorsHandler();
    popupProfileAvatar.open();
});
