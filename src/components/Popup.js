export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupCloseButton = this._popup.querySelector('.popup__close');
    }

    _closeButton = () => {
        this.closePopup()
    }

    _closeByEsc = (evt) => {
        if (evt.code === 'Escape') {
            this.closePopup()
        }
    }

    _closeByOverlay = (evt) => {
        if ((evt.target.classList.contains('popup__close')) || (evt.target.classList.contains('popup_opened'))) {
            this.closePopup();
        }
    }

    setEventListeners() {
        this._popupCloseButton.addEventListener('click', this._closeButton);
        this._popup.addEventListener('click', this._closeByOverlay);
    }
    
    openPopup() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._closeByEsc);
    }

    closePopup() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._closeByEsc);
    }
}