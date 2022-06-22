import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleForm }) {
        super(popupSelector);
        this._handleForm = handleForm;
        this._popupForm = this._popupSelector.querySelector(".popup__form");
    }

    _getInputValues() {
        let obj = {};
        const popupInputs = this._popupForm.querySelectorAll(".popup__input");
        popupInputs.forEach((item) => {
            obj[item.name] = item.value
        });
        return obj;
    }

    setEventListeners() {
        super.setEventListener();
        super.openPopup();
        this._popupSelector.addEventListener('submit', () => {
            this._handleForm(this._getInputValues());
            this.closePopup();
        }, {once: true});
    }

    closePopup() {
        super.closePopup();
        this._popupForm.reset();
    }
}