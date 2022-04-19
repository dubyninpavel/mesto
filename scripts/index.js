let page = document.querySelector(".page")
let editButton = page.querySelector(".profile__edit-button");
let popup = page.querySelector(".popup");
let closeButtonPopup = page.querySelector(".popup__close");
let popupForm = popup.querySelector(".popup__form");
let popupName = popupForm.querySelector(".popup__name");
let popupSubline = popupForm.querySelector(".popup__subline");
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

function onSubmitInfo(event) {
    event.preventDefault();
    togglePopup();
    changeName();
}

function changeName(event) {
    let changePopupName = popupName.value;
    profileName.textContent = changePopupName;
    let changePopupSubline = popupSubline.value;
    profileSubline.textContent = changePopupSubline;
}

editButton.addEventListener('click', togglePopup);
closeButtonPopup.addEventListener('click', togglePopup);
popup.addEventListener('click', onOverlayClick);
popupForm.addEventListener('submit', onSubmitInfo);