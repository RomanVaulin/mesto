export default class Card {
    constructor(cardData, templateSelector, openImagePopup, openDeletePopup, changeLike) {
        this._cardData = cardData;
        this._myId = cardData.myId;
        this._likes = cardData.likes;
        this._likesLength = cardData.likes.length;
        this._ownerId = cardData.owner._id;
        this._cardId = cardData._id;
        this._templateSelector = templateSelector;
        this._openImage = openImagePopup;
        this._openDeletePopup = openDeletePopup;
        this._changeLike = changeLike;
        this._cloneElement = this._getTemplateClone();
        this._imageElement = this._cloneElement.querySelector('.element__image');
        this._likeBtnElement = this._cloneElement.querySelector('.element__like-button');
        this._trashBtnElement = this._cloneElement.querySelector('.element__trash');
        this._descriptionElement = this._cloneElement.querySelector('.element__description');
        this._likesCounter = this._cloneElement.querySelector('.element__likes_number');
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
        this._changeLike(this._cardId, this._likeBtnElement);
    }

    _handleTrashBtn = () => {
        this._openDeletePopup({card: this, cardId: this._cardId});
    }

    _setEventListeners() {
        this._likeBtnElement.addEventListener('click', this._handleLikeBtn);
        this._trashBtnElement.addEventListener('click', this._handleTrashBtn);
        this._imageElement.addEventListener('click', this._handleOpenImage)
    }

    _changeVisibleForTrashBtn() {
        this._myId === this._ownerId
        ? this._trashBtnElement.style.display = 'block'
        : this._trashBtnElement.style.display = 'none'
    }

    _checkLikeStatus() {
        this._likes.forEach(value => {
            if (value._id === this._myId) {
                this._likeBtnElement.classList.add('element__like-button_active')
                return true
            }
        })
        this._likesCounter.textContent = this._likesLength;
    }

    isLiked(likes) {
        this._likeBtnElement.classList.toggle('element__like-button_active');
        this._likesCounter.textContent = likes.length
    }

    isMyLike() {
        return this._likeBtnElement.classList.contains('element__like-button_active');
    }

    removeCard() {
        this._cloneElement.remove();
        this._cloneElement = null;
    }

    createCard() {
        this._imageElement.src = this._cardData.link;
        this._imageElement.alt = this._cardData.name;
        this._descriptionElement.textContent = this._cardData.name;
        this._changeVisibleForTrashBtn();
        this._checkLikeStatus();
        this._setEventListeners();
        return this._cloneElement;
    }
};