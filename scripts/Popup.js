import { ESC__CODE } from "./constants.js";

function openPopup(item) {
    item.classList.add("popup_is-active");
    item.addEventListener('mousedown', checkPressClosePopup);
    document.addEventListener('keydown', checkPressEsc);
}

function closePopup(item) {
    item.classList.remove("popup_is-active");
    item.removeEventListener('mousedown', checkPressClosePopup);
    document.removeEventListener('keydown', checkPressEsc);
}

function checkPressEsc(evt) {
    if (evt.key === ESC__CODE) {
        const openedPopup = document.querySelector(".popup_is-active");
        closePopup(openedPopup);
    }
}

function checkPressClosePopup(evt) {
    if (evt.target.classList.contains("popup__close") || evt.target.classList.contains("popup_is-active")) {
        closePopup(evt.currentTarget);
    }
}

export { openPopup, closePopup};