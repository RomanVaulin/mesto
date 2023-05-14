const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__error_visible'
};
//решил переписать всю валидацию по другому примеру, функционал прошлой до конца не понимаю пока
//оставлю для разбора и поиска ошибок в будущих практических
function disableSubmit(event) {
    event.preventDefault();
}

function enableValidation(config) { 
    const form = Array.from(document.querySelectorAll(config.formSelector));
    form.forEach(form => {
        form.addEventListener('submit', disableSubmit);
        form.addEventListener('input', () => {
            toggleButton(form, config);
        })
       
        addInputListeners(form, config);
        toggleButton(form, config);
    })
}

function handleFormInput(event, config) {
    const input = event.target;
    const inputId = input.id;
    const errorElement = document.querySelector(`#${inputId}-error`);

    if (input.validity.valid) {
        input.classList.remove(config.errorClass)
        errorElement.textContent = ''
    } else {
        input.classList.add(config.errorClass);
        errorElement.textContent = input.validationMessage;
    }
}

function toggleButton(form, config) {
    const buttonSubmit = form.querySelector(config.submitButtonSelector);
    const isFormValid = form.checkValidity();
    
    buttonSubmit.disabled = !isFormValid;
    buttonSubmit.classList.toggle(config.inactiveButtonClass, !isFormValid)
}

function addInputListeners(form, config) {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));

    inputList.forEach(function (item) {
        item.addEventListener('input', (event) => {
            handleFormInput(event, config)
        });
    });
}

enableValidation(validationConfig);

// const enableValidation = ({ formSelector, ...rest }) => {
//     const forms = Array.from(document.querySelectorAll(formSelector))
//     forms.forEach(form => {
//         setEventListeners(form, rest);
//     })
// };

// const setEventListeners = (formToValidate, { inputSelector, submitButtonSelector, ...rest }) => {
//     const formInputs = Array.from(formToValidate.querySelectorAll(inputSelector))
//     const formButton = formToValidate.querySelector(submitButtonSelector)
//     disableButton(formButton, rest)
//     formInputs.forEach(input => {
//         input.addEventListener('input', () => {
//             checkInputValidity(input)
//             if (hasInvalidInput(formInputs)) {
//                 disableButton(formButton, rest)
//             } else {
//                 enableButton(formButton, rest)
//             }
//         })
//     })
//     formToValidate.addEventListener('submit', (evt) => {
//         evt.preventDefault();
//     });
// }

// const hasInvalidInput = (formInputs) => {
//     return formInputs.some(item => !item.validity.valid)
// }

// const activateInputError = (input) => {
//     const containerEl = input.closest('.popup__input');
//     containerEl.classList.add('popup__error_visible');
// }

// const diactivateInputError = (input) => {
//     const containerEl = input.closest('.popup__input');
//     containerEl.classList.remove('popup__error_visible');
// }

// const checkInputValidity = (input) => {
//     const currentInputError = document.querySelector(`#${input.id}-error`)
//     if (input.checkValidity()) {
//         diactivateInputError(input);
//         currentInputError.textContent = ''
//     } else {
//         activateInputError(input);
//         currentInputError.textContent = input.validationMessage
//     }
// }

// const enableButton = (button, { inactiveButtonClass }) => {
//     button.classList.remove(inactiveButtonClass)
//     button.removeAttribute('disabled')
// }

// const disableButton = (button, { inactiveButtonClass }) => {
//     button.classList.toggle(inactiveButtonClass)
//     button.setAttribute('disabled', true)
// }

// enableValidation(validationConfig);