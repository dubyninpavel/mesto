import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ popupElement, handleForm }) {
        super(popupElement);
        this._handleForm = handleForm;
        this._popupForm = this._popupElement.querySelector(".popup__form");
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
            this.close();
        });
    }

    close() {
        const popupErrorText = this._popupForm.querySelectorAll(".popup__input-error");
        popupErrorText.forEach((item) => {
            item.textContent = "";
        })
        super.close();
        this._popupForm.reset();
    }
}