import Popup from "./Popup.js";
import { popupImage, popupText } from "../utils/constants.js";

export default class PopupWithImage extends Popup {
    constructor({ data }, popupSelector) {
        super(popupSelector);
        this._name = data.name;
        this._link = data.link;
    }

    openPopup() {
        popupImage.setAttribute("src", this._link);
        popupImage.setAttribute("alt", this._name);
        popupText.textContent = this._name;
        super.openPopup();
    }
}