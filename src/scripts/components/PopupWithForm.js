import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ popupElement, handleForm }) {
        super(popupElement);
        this._handleForm = handleForm;
        this._popupForm = this._popupElement.querySelector(".popup__form");
        this._buttonForm = this._popupForm.querySelector(".popup__button");
    }

    _getInputValues() {
        const inputvalues = {};
        const popupInputs = this._popupForm.querySelectorAll(".popup__input");
        popupInputs.forEach((item) => {
            inputvalues[item.name] = item.value
        });
        return inputvalues;
    }

    setEventListeners() {
        super.setEventListener();
        this._popupElement.addEventListener('submit', () => {
            this._handleForm(this._getInputValues());
            //this.close();
        });
    }

    renderLoading(isLoading, textLoading, text) {
        if (isLoading) {
            this._buttonForm.textContent = textLoading;
        } else {
            this._buttonForm.textContent = text;
        }
    }

    close() {
        super.close();
        this._popupForm.reset();
    }
}