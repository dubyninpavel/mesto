import { ESC__CODE } from "../utils/constants.js";

export default class Popup {
    constructor(popupElement) {
        this._popupElement = popupElement;
        this.checkPressClosePopup = this._checkPressClosePopup.bind(this);
        this.handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popupElement.classList.add("popup_is-active");
        this.setEventListener();
        
    }
    
    close() {
        this._popupElement.classList.remove("popup_is-active");
        this._popupElement.removeEventListener('mousedown', this.checkPressClosePopup);
        document.removeEventListener('keydown', this.handleEscClose);
    }
   
    setEventListener() {
        this._popupElement.addEventListener('mousedown', this.checkPressClosePopup);
        document.addEventListener('keydown', this.handleEscClose);
    }

    _handleEscClose(evt) {
        if (evt.key === ESC__CODE) {
            this.close();
        }
    }
    
    _checkPressClosePopup(evt) {
        if (evt.target.classList.contains("popup__close") || evt.target.classList.contains("popup_is-active")) {
            this.close();
        }
    }
}