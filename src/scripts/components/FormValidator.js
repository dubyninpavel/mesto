export default class FormValidator {
    constructor (dataValidation, elementFormValidation) {
        this._dataValidation = dataValidation;
        this._elementFormValidation = elementFormValidation;
        this._buttonElement = this._elementFormValidation.querySelector(this._dataValidation.submitButtonSelector);
    }

    enableValidation() {
        this._elementFormValidation.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._setButtonDisabled(this._buttonElement);
        });
        this._setEventListeners();
    }

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    }

    _toogleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add( this._dataValidation.inactiveButtonClass);
            buttonElement.setAttribute('disabled', true);
        } else {
            buttonElement.classList.remove( this._dataValidation.inactiveButtonClass);
            buttonElement.removeAttribute('disabled');
        }
    }

    _showInputError(fieldsetElement, inputElement, errorMessage) {
        const errorElement = fieldsetElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._dataValidation.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._dataValidation.errorClass);
    }

    _hideInputError(fieldsetElement, inputElement) {
        const errorElement = fieldsetElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._dataValidation.inputErrorClass);
        errorElement.textContent = "";
        errorElement.classList.remove(this._dataValidation.errorClass);
    }

    _checkInputValidaty(fieldsetElement, inputElement,) {
        if (!inputElement.validity.valid) {
            this._showInputError(fieldsetElement, inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(fieldsetElement, inputElement);
        }
    }

    _setButtonDisabled(buttonElement) {
        buttonElement.setAttribute('disabled', true);
        buttonElement.classList.add("popup__button_disabled");
    }

    _setEventListeners() {
        const inputList = Array.from(this._elementFormValidation.querySelectorAll(this._dataValidation.inputSelector));
        this._setButtonDisabled(this._buttonElement);
        this._toogleButtonState(inputList, this._buttonElement);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidaty(this._elementFormValidation, inputElement);
                this._toogleButtonState(inputList, this._buttonElement);
            });
        })
    }
}