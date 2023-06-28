export default class FormValidator {
    constructor(config, form) {
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._errorClass = config.errorClass;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._form = form;
        this._button = form.querySelector(this._submitButtonSelector);
        this._inputList = form.querySelectorAll(this._inputSelector);
    }

    _hideInputError(errorTextElement, input) {
        input.classList.remove(this._errorClass);
        // errorTextElement.classList.remove(this._inputErrorClass);
        errorTextElement.textContent = "";
    }

    _showInputError(errorTextElement, input) {
        input.classList.add(this._errorClass);
        errorTextElement.classList.add(this._inputErrorClass);
        errorTextElement.textContent = input.validationMessage;
    }

    _handleFormInput(input) {
        const errorTextElement = this._form.querySelector(`#${input.id}-error`);
        if (input.validity.valid) {
            this._hideInputError(errorTextElement, input);
        } else {
            this._showInputError(errorTextElement, input);
        }
    }

    _handleValidInput() {
        return Array.from(this._inputList).every((input) => input.validity.valid);
    }

    _enableSubmitButton() {
        this._button.classList.remove(this._inactiveButtonClass);
        this._button.disabled = false;
    }

    _disableSubmitButton() {
        this._button.classList.add(this._inactiveButtonClass);
        this._button.disabled = true;
    }

    _toggleButton() {
        this._handleValidInput()
            ? this._enableSubmitButton()
            : this._disableSubmitButton(this._button);
    }

    _addInputListeners() {
        this._inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._handleFormInput(input);
                this._toggleButton();
            })
        })
    }

    enableValidation() {
        this._addInputListeners();
    }

    resetValidationState() {
        this._inputList.forEach((input) => {
            const errorReset = this._form.querySelector(`#${input.id}-error`);
            if (!input.validity.valid) {
                this._hideInputError(errorReset, input);
            }
        });

        this._disableSubmitButton();
    }
}