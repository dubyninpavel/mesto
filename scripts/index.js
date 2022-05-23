const page = document.querySelector(".page")
const editButton = page.querySelector(".profile__edit-button");
const addButton = page.querySelector(".profile__add-button");
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

function openPopup(item) {
    item.classList.add("popup_is-active");
}

function closePopup(item) {
    item.classList.remove("popup_is-active");
}

function onOverlayClick(event) {
    if (event.target === event.currentTarget) {
        checkContainClass(event);
    }
}

function checkContainClass(item) {
    if (item.path.some(function (className) {
        return className === popupEditProfile;
    })) {
        closePopup(popupEditProfile);
    }
    else if (item.path.some(function (className) {
        return className === popupAddCards;
    })) {
        closePopup(popupAddCards);
    }
    else if (item.path.some(function (className) {
        return className === popupPhoto;
    })) {
        closePopup(popupPhoto);
    }
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
    popupText.setAttribute("alt", item.name);
    popupText.textContent = item.name;
    openPopup(popupPhoto);
}

function handleLikeCard(item) {
    item.classList.toggle("cards__like_active");
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
        toogleEsc(popupPhoto);
    });
    
    return cardElement;
}

function toogleEsc(item) {
    item.addEventListener("keydown", (evt) => {
        if (evt.key === 'Escape') {
            checkContainClass(evt);
        }
    })
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

initialCards.forEach((card) => {
    renderCard(card, cardList);
});

editButton.addEventListener('click', () => {
    handleProfileFormClear();
    openPopup(popupEditProfile);
    toogleEsc(popupEditProfile);
});

addButton.addEventListener('click', () => {
    openPopup(popupAddCards);
    toogleEsc(popupAddCards);
});

closeButtonPopupProfile.addEventListener('click', (evt) => {
    closePopup(popupEditProfile);
});

closeButtonPopupCards.addEventListener('click', () => {
    closePopup(popupAddCards);
});

closeButtonPopupPhoto.addEventListener('click', () => {
    closePopup(popupPhoto);
});

popupEditProfile.addEventListener('click', onOverlayClick);
popupAddCards.addEventListener('click', onOverlayClick);
popupPhoto.addEventListener('click', onOverlayClick);