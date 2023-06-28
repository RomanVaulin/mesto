export default class Card {
    constructor(cardData, templateSelector, openImagePopup) {
        this._cardData = cardData;

        this._templateSelector = templateSelector;
        this._openImage = openImagePopup;
    }

    _getTemplateClone() {
        return document.querySelector(this._templateSelector)
        .content.querySelector('.element')
        .cloneNode(true);
    }

    _handleOpenImage = () => {
        this._openImage(this._cardData);
    }

    _handleLikeBtn = () => {
        this._likeBtnElement.classList.toggle('element__like-button_active');
    }

    _handleTrashBtn = () => {
        this._cloneElement.remove();
        this._cloneElement = null;
    }

    _setEventListeners() {
        this._likeBtnElement.addEventListener('click', this._handleLikeBtn);
        this._trashBtnElement.addEventListener('click', this._handleTrashBtn);
        this._imageElement.addEventListener('click', this._handleOpenImage)
    }

    createCard() {
        this._cloneElement = this._getTemplateClone();
        this._imageElement = this._cloneElement.querySelector('.element__image');
        this._likeBtnElement = this._cloneElement.querySelector('.element__like-button');
        this._trashBtnElement = this._cloneElement.querySelector('.element__trash');
        this._descriptionElement = this._cloneElement.querySelector('.element__description');
        this._imageElement.src = this._cardData.link;
        this._imageElement.alt = this._cardData.title;
        this._descriptionElement.textContent = this._cardData.title;
        this._setEventListeners();
        return this._cloneElement;
    }
};