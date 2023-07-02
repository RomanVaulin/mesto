export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupCloseButton = this._popup.querySelector('.popup__close');
        this._form = this._popup.querySelector('.popup__form');
    }

    _closeByButton = () => {
        this.close()
    }

    _closeByEsc = (evt) => {
        if (evt.code === 'Escape') {
            this.close()
        }
    }

    _closeByOverlay = (evt) => {
        if ((evt.target.classList.contains('popup__close')) || (evt.target.classList.contains('popup_opened'))) {
            this.close();
        }
    }

    setEventListeners() {
        this._popupCloseButton.addEventListener('click', this._closeByButton);
        this._popup.addEventListener('click', this._closeByOverlay);
    }
    
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._closeByEsc);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._closeByEsc);
    }
}