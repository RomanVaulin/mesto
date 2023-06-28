import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitFunction) {
        super(popupSelector);
        this._submitFunction = submitFunction;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
    }

    close() {
        super.close();
        this._form.reset();
    }

    _getInputValue() {
        const values = {};
        this._inputList.forEach(input => {
            values[input.name] = input.value
        });

        return values
    }

    setInputValue(userData) {
        this._inputList.forEach(input => {
            input.value = userData[input.name];
        })
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitFunction(this._getInputValue());
        });
    }
}