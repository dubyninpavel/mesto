import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup{
    constructor({ popupElement}) {
        super(popupElement);
        this._handleSubmit = () => {};
    }

    setHandleSubmit(functiobForSubmit) {
        this._handleSubmit = functiobForSubmit;
    }

    setEventListener() {
        super.setEventListener();
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit();
        });
    }

}