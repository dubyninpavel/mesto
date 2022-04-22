const page = document.querySelector(".page")
const editButton = page.querySelector(".profile__edit-button");
let popup = page.querySelector(".popup");
const closeButtonPopup = page.querySelector(".popup__close");
const popupForm = popup.querySelector(".popup__form");
const popupName = popupForm.querySelector(".popup__name");
const popupSubline = popupForm.querySelector(".popup__subline");
let profileName = page.querySelector(".profile__name");
let profileSubline = page.querySelector(".profile__subline");

function togglePopup() {
    popup.classList.toggle("popup_is-active");
}

function onOverlayClick(event) {
    if (event.target === event.currentTarget) {
        togglePopup();
    }
}

function handleProfileFormSubmit(event) {
    event.preventDefault();
    togglePopup();
    changeProfileName();
}

function changeProfileName(event) {
    const changePopupName = popupName.value;
    profileName.textContent = changePopupName;
    const changePopupSubline = popupSubline.value;
    profileSubline.textContent = changePopupSubline;
}

editButton.addEventListener('click', togglePopup);
closeButtonPopup.addEventListener('click', togglePopup);
popup.addEventListener('click', onOverlayClick);
popupForm.addEventListener('submit', handleProfileFormSubmit);