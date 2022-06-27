import './styles/index.css';

import { popupProfileForm, profileAvatar, profileImage, popupAvatar, popupFormAvatar, popupDeleteCard, popupNameElement, popupSublineElement, popupAddCards, popupCardForm, editButton, addButton, popupEditProfile, popupPhoto, cardList, cardTemplate } from "./scripts/utils/constants.js";
import { dataValidation } from "./scripts/utils/dataValidation.js";
import Card from "./scripts/components/Card.js";
import FormValidator from "./scripts/components/FormValidator.js";
import Section from "./scripts/components/Section.js";
import PopupWithImage from "./scripts/components/PopupWithImage.js";
import PopupWithForm from "./scripts/components/PopupWithForm.js";
import UserInfo from "./scripts/components/UserInfo.js";
import Api from "./scripts/components/Api.js";
import PopupWithSubmit from "./scripts/components/PopupWithSubmit.js";

let myId = " ";

const profile = new UserInfo({nameSelector: ".profile__name", infoSelector: ".profile__subline", imageSelector: ".profile__image"});

const dataUser = new Api('https://nomoreparties.co/v1/cohort-43');

dataUser.getAllData()
    .then((items) => {
        const [ dataFromUserPromise, dataFromCardsPromise ] = items;

        myId = dataFromUserPromise._id;
        profile.setUserInfo(dataFromUserPromise);

        const cardGridList = new Section({
            data: dataFromCardsPromise,
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

const popupImage = new PopupWithImage(popupPhoto);

function createCard(item) {
    const newCard = new Card({
        data: item,
        myUserId: myId,
        handleCardClick: () => {
            popupImage.open(item);
        },
        setCardLike: () => {
            dataUser.setLikeCard(item._id)
            .then((item) => {
                newCard.getCountLike(item);
                newCard.likeCard();
            })
            .catch((err) => {
                console.log(err);
            })
            
        },
        delCardLike: () => {
            dataUser.deleteLikeCard(item._id)
            .then((item) => {
                newCard.getCountLike(item);
                newCard.likeCard();
            })
            .catch((err) => {
                console.log(err);
            })
            
        },
        handleCardDelete: (cardInfo) => {
            popupDelete.open();
            popupDelete.setHandleSubmit(() => {
                dataUser.deleteCard(cardInfo._dataCard._id)
                    .then(() => {
                        newCard.deleteCardElement();
                    })
                    .then(() => {
                        popupDelete.close();
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
        }
    }, cardTemplate);
    return newCard;
}

const popupDelete = new PopupWithSubmit({ 
    popupElement: popupDeleteCard
    });


const formProfileValidator = new FormValidator(dataValidation, popupProfileForm);
formProfileValidator.enableValidation();
const popupProfile = new PopupWithForm({ 
    popupElement: popupEditProfile,
    handleForm: (dataPopup) => {
        popupProfile.renderLoading(true, "Сохранение...", " ");
        dataUser.setDataUser(dataPopup)
            .then((dataUser) => {
                profile.setUserInfo(dataUser);
            })
            .then(() => {
                popupProfile.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupProfile.renderLoading(false, " ", "Сохранить");
            });
    }
});

popupProfile.setEventListeners();

editButton.addEventListener('click', () => {
    formProfileValidator.clearErrorsHandler();
    popupProfile.open();
    const { name, about } = profile.getUserInfo();
    popupNameElement.value = name;
    popupSublineElement.value = about;
});

const formCardValidator = new FormValidator(dataValidation, popupCardForm);
formCardValidator.enableValidation();

const popupAddCard = new PopupWithForm({
    popupElement: popupAddCards,
    handleForm: (dataPopup) => {
        popupAddCard.renderLoading(true, "Сохранение...", " ");
        dataUser.addNewCard(dataPopup)
            .then((cardInfo) => {
                const CardElement = createCard(cardInfo).createCardTemplate();
                const newCard = new Section({
                    data: [cardInfo],
                    renderer: (item) => {
                        const newCardElement = createCard(item).createCardTemplate();
                        newCard.addItem(newCardElement);
                    }
                }, cardList);
                newCard.renderItems();

            })
            .then(() => {
                popupAddCard.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupAddCard.renderLoading(false, " ", "Создать");
            });
    }
});

popupAddCard.setEventListeners();

addButton.addEventListener('click', () => {
    formCardValidator.clearErrorsHandler();
    popupAddCard.open();
});

const formAvatarValidator = new FormValidator(dataValidation, popupFormAvatar);
formAvatarValidator.enableValidation();

const popupProfileAvatar = new PopupWithForm({
    popupElement: popupAvatar,
    handleForm: (dataPopup) => {
        popupProfileAvatar.renderLoading(true, "Сохранение...", " ");
        dataUser.updatePhotoProfile(dataPopup)
            .then((profileInfo) => {
                profileImage.setAttribute('src', profileInfo.avatar);
            })
            .then(() => {
                popupProfileAvatar.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupProfileAvatar.renderLoading(false, " ", "Сохранить");
            });
    }
});

popupProfileAvatar.setEventListeners();

profileAvatar.addEventListener('click', () => {
    formCardValidator.clearErrorsHandler();
    popupProfileAvatar.open();
});
