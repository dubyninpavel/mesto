import { ESC__CODE } from "../utils/constants.js";

export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    openPopup() {
        this._popupSelector.classList.add("popup_is-active");
        this.setEventListener();
        
    }
    
    closePopup() {
        this._popupSelector.classList.remove("popup_is-active");
        this._popupSelector.removeEventListener('mousedown', this._checkPressClosePopup);
        document.removeEventListener('keydown', this._handleEscClose);
    }
   
    setEventListener() {
        this._popupSelector.addEventListener('mousedown', this._checkPressClosePopup.bind(this));
        document.addEventListener('keydown', this._handleEscClose.bind(this));
    }

    _handleEscClose(evt) {
        if (evt.key === ESC__CODE) {
            this.closePopup(this._popupSelector);
        }
    }
    
    _checkPressClosePopup(evt) {
        if (evt.target.classList.contains("popup__close") || evt.target.classList.contains("popup_is-active")) {
            this.closePopup(this._popupSelector);
        }
    }
}