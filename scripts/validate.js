const enableValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

const validation = ({ formSelector, ...rest }) => {
    const forms = Array.from(document.querySelectorAll(formSelector))
    forms.forEach(form => {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(form, rest);
    })
};

const setEventListeners = (formToValidate, { inputSelector, submitButtonSelector, ...rest }) => {
    const formInputs = Array.from(formToValidate.querySelectorAll(inputSelector))
    const formButton = formToValidate.querySelector(submitButtonSelector)
    disableButton(formButton, rest)
    formInputs.forEach(input => {
        input.addEventListener('input', () => {
            checkInputValidity(input)
            if (hasInvalidInput(formInputs)) {
                disableButton(formButton, rest)
            } else {
                enableButton(formButton, rest)
            }
        })
    })
}

const hasInvalidInput = (formInputs) => {
    return formInputs.some(item => !item.validity.valid)
}

const enableButton = (button, { inactiveButtonClass }) => {
    button.classList.remove(inactiveButtonClass)
    button.removeAttribute('disabled')
}

const disableButton = (button, { inactiveButtonClass }) => {
    button.classList.add(inactiveButtonClass)
    button.setAttribute('disabled', true)
}

const activateInputError = (input) => {
    const containerEl = input.closest('.popup__input');
    containerEl.classList.add('popup__error_visible');
}

const diactivateInputError = (input) => {
    const containerEl = input.closest('.popup__input');
    containerEl.classList.remove('popup__error_visible');
}

const checkInputValidity = (input) => {
    const currentInputError = document.querySelector(`#${input.id}-error`)
    if (input.checkValidity()) {
        diactivateInputError(input);
        currentInputError.textContent = ''
    } else {
        activateInputError(input);
        currentInputError.textContent = input.validationMessage
    }
}

validation(enableValidation)


        
       