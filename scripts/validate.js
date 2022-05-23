function showInputError(fieldsetElement, inputElement, errorMessage) {
    const errorElement = fieldsetElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("popup__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("popup__error_visible");
}

function hideInputError(fieldsetElement, inputElement) {
    const errorElement = fieldsetElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("popup__input_type_error");
    errorElement.textContent = "";
    errorElement.classList.remove("popup__error_visible");
}

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

function toogleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add("popup__button_disabled");
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove("popup__button_disabled");
        buttonElement.removeAttribute('disabled');
    }
}

function checkInputValidaty(fieldsetElement, inputElement) {
    if (!inputElement.validity.valid) {
        showInputError(fieldsetElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(fieldsetElement, inputElement);
    }
}

function setEventListeners(fieldsetElement) {
    const inputList = Array.from(fieldsetElement.querySelectorAll(".popup__input"));
    const buttonElement = fieldsetElement.querySelector(".popup__button");
    toogleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidaty(fieldsetElement, inputElement);
            toogleButtonState(inputList, buttonElement);
        });
    })
}


function enableValidation(obj) {
    Object.values(obj).forEach((objValue) => {
        const formList = Array.from(document.querySelectorAll(objValue));
        formList.forEach((formElement) => {
            formElement.addEventListener('submit', (evt) => {
                evt.preventDefault();
                checkContainClass(evt);
                if (evt.target.classList.contains('popup__form_profile')) {
                    changeProfileName();
                } else if (evt.target.classList.contains('popup__form_card')) {
                    handleAddCard();
                    formElement.reset();
                }
                
            });
            const fieldsetList = Array.from(formElement.querySelectorAll(".popup__fieldset"));
            fieldsetList.forEach((fieldsetElement) => {
                setEventListeners(fieldsetElement);
            })
        });
    })    
  }

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});