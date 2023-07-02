import Popup from "./Popup";

export default class PopupDeleteCard extends Popup {
    constructor(popupSelector, submitFunction) {
        super(popupSelector);
        this._submitFunction = submitFunction;
        this._submitBtn = this._form.querySelector('.popup__button');
        this._defaultSubmitText = this._submitBtn.textContent;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitBtn.textContent = `${this._submitBtn.textContent}...`;
            this._submitFunction({ card: this._element, cardId: this._cardId })
        })
    }

    setDefaultText() {
        this._submitBtn.textContent = this._defaultSubmitText;
    }

    open = ({ card, cardId }) => {
        super.open();
        this._element = card
        this._cardId = cardId
    }
}