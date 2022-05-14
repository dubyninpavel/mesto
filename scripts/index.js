const initialCards = [
    {
      name: 'Париж',
      link: 'images/paris.jpg'
    },
    {
      name: 'Озеро Крейтер',
      link: 'images/crater-lake.jpg'
    },
    {
      name: 'Нью-Йорк',
      link: 'images/new-york.jpg'
    },
    {
      name: 'Санкт-Петербург',
      link: 'images/saint-petersburg.jpg'
    },
    {
      name: 'Токио',
      link: 'images/tokyo.jpg'
    },
    {
      name: 'Владивосток',
      link: 'images/vladivostok.jpg'
    }
  ]; 

const page = document.querySelector(".page")
const editButton = page.querySelector(".profile__edit-button");
const addButton = page.querySelector(".profile__add-button");
let popup = page.querySelector(".popup");
let popupEditProfile = page.querySelector(".popup_edit-profile");
let popupAddCards = page.querySelector(".popup_add-cards");
let popupPhoto = page.querySelector(".popup_photo");
const popupCardForm =  popupAddCards.querySelector(".popup__form");
const cardTemplate = page.querySelector(".template")
const closeButtonPopup = page.querySelectorAll(".popup__close");
const popupForm = popup.querySelector(".popup__form");
const popupName = popupForm.querySelector(".popup__name");
const popupSubline = popupForm.querySelector(".popup__subline");
let profileName = page.querySelector(".profile__name");
let profileSubline = page.querySelector(".profile__subline");
let cardList = page.querySelector(".cards__list");

function openPopup(item) {
    item.classList.add("popup_is-active");
}

function closePopup() {
    popupEditProfile.classList.remove("popup_is-active");
    popupAddCards.classList.remove("popup_is-active");
    popupPhoto.classList.remove("popup_is-active");
}

function onOverlayClick(event) {
    if (event.target === event.currentTarget) {
        closePopup();
    }
}

function handleProfileFormSubmit(event) {
    event.preventDefault();
    closePopup();
    changeProfileName();
}

function changeProfileName(event) {
    const changePopupName = popupName.value;
    profileName.textContent = changePopupName;
    const changePopupSubline = popupSubline.value;
    profileSubline.textContent = changePopupSubline;
}

function createCardTemplate(item) {
    let getElementTemplate = cardTemplate.content.cloneNode(true);
    let cardPhoto = getElementTemplate.querySelector(".cards__photo");
    let cardPlaceName = getElementTemplate.querySelector(".cards__place");
    let cardLikeButton = getElementTemplate.querySelector(".cards__like");
    const deleteButton = getElementTemplate.querySelector('.cards__delete-button');
    const popupImage = popupPhoto.querySelector(".popup__image");
    const popupText = popupPhoto.querySelector(".popup__text");
    cardPhoto.setAttribute("src", item.link);
    cardPhoto.setAttribute("alt", item.name);
    cardPlaceName.textContent = item.name;

    cardLikeButton.addEventListener('click', () => {
        cardLikeButton.classList.toggle("cards__like_active");
    });

    deleteButton.addEventListener('click', deleteCard);

    cardPhoto.addEventListener('click', (event) => {
        openPopup(popupPhoto);
        popupImage.setAttribute("src", item.link);
        popupImage.setAttribute("alt", item.name);
        popupText.textContent = item.name;
    });

    return getElementTemplate;
}

function render() {
    let getElement = initialCards.map(createCardTemplate);
    cardList.append(...getElement);
}

function handlerAddCard() {
    const popupNameCard = popupAddCards.querySelector(".popup__name").value;
    const popupLinkCard = popupAddCards.querySelector(".popup__subline").value;
    const createNewCard = createCardTemplate({name:popupNameCard, link: popupLinkCard});
    cardList.prepend(createNewCard);
}

function handleAddCardFormSubmit(event) {
    event.preventDefault();
    closePopup();
    handlerAddCard();
}

function deleteCard(event) {
    const cardElement = event.target.closest(".cards__item");
    cardElement.remove(); 
}

render();

editButton.addEventListener('click', () => {
    openPopup(popupEditProfile);
});

closeButtonPopup[0].addEventListener('click', () => {
    closePopup();
});

closeButtonPopup[1].addEventListener('click', () => {
    closePopup();
});

closeButtonPopup[2].addEventListener('click', () => {
    closePopup();
});

addButton.addEventListener('click', () => {
    openPopup(popupAddCards);
});

popupEditProfile.addEventListener('click', onOverlayClick);
popupAddCards.addEventListener('click', onOverlayClick);
popupPhoto.addEventListener('click', onOverlayClick);

popupForm.addEventListener('submit', handleProfileFormSubmit);
popupCardForm.addEventListener('submit', handleAddCardFormSubmit);