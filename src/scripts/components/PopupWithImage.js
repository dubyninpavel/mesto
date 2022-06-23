import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupElement) {
        super(popupElement);
    }

    open(item) {
        const popupImage = this._popupElement.querySelector(".popup__image");
        const popupText = this._popupElement.querySelector(".popup__text");
        popupImage.setAttribute("src", item.link);
        popupImage.setAttribute("alt", item.link);
        popupText.textContent = item.name;
        super.open();
    }
}