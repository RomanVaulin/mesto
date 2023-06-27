import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitFunction) {
        super(popupSelector);
        this._submitFunction = submitFunction;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
    }

    closePopup() {
        super.closePopup();
        this._form.reset();
    }

    getInputValue() {
        this._value = {};
        this._inputList.forEach(input => {
            this._value[input.name] = input.value
        });

        return this._value
    }

    setInputValue(userData) {
        this._inputList.forEach(input => {
            input.value = userData[input.name];
        })
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._submitFunction);
    }
}