const dataValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}

class FormValidator {

    _dataValidation;
    _elementFormValidation;

    constructor (dataValidation, elementFormValidation) {
        this._dataValidation = dataValidation;
        this._elementFormValidation = elementFormValidation;
    }

    enableValidation() {
        this._elementFormValidation.addEventListener('submit', (evt) => {
            evt.preventDefault();
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

    _setEventListeners() {
        const inputList = Array.from(this._elementFormValidation.querySelectorAll(this._dataValidation.inputSelector));
        const buttonElement = this._elementFormValidation.querySelector(this._dataValidation.submitButtonSelector);
        this._toogleButtonState(inputList, buttonElement);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidaty(this._elementFormValidation, inputElement);
                this._toogleButtonState(inputList, buttonElement);
            });
        })
    }
}

export { FormValidator, dataValidation };