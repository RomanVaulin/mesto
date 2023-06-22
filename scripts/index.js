import { initialCards } from './constants.js';
import Card from './Сard.js';
import FormValidator from './FormValidator.js';

//Попап редактирования
const editButton = document.querySelector('.profile__edit-button');//находим кнопку редактирования имени и рода деятельности
const popupEdit = document.querySelector('.popupEdit');//находим весь попап

const submitEditForm = popupEdit.querySelector('.popupEdit__form');//находим форму попапа редактирования имени и рода деятельности
const nameProfile = document.querySelector('.profile__name');//находим строку с именем 
const jobProfile = document.querySelector('.profile__description');//находим строку с родом деятельности
const nameInput = popupEdit.querySelector('.popupEdit__field_name_input');//находим ввод нового имени
const jobInput = popupEdit.querySelector('.popupEdit__field_description_input');//находим ввод нового рода деятельности

const buttonAdd = document.querySelector('.profile__add-button');//находим кнопку добавления карточек
const container = document.querySelector('.elements');//находим место добавления карточек
const popupAdd = document.querySelector('.popupAdd');//находим попап добавления карточек
const placeInput = popupAdd.querySelector('.popupAdd__field_place_input');//находим ввод нового места
const linkInput = popupAdd.querySelector('.popupAdd__field_link_input');//находим ввод ссылки на картинку
const createForm = popupAdd.querySelector('.popupAdd__form');//находим форму попапа создания места с картинкой
const imgPopup = document.querySelector('.popupImage');//находим попап изображения
const openImg = imgPopup.querySelector('.popupImage__image-opened');//находим элемент открытия изображения
const imgCaption = imgPopup.querySelector('.popupImage__caption');//находим подпись фотографий
const addPopupSubmitBtn = popupAdd.querySelector('.popup__button');

const templateSelector = "#card";

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__error_visible'
};

//закрытие попапов на Esc
const closeByEsc = (evt) => {
    if (evt.code === 'Escape') {
        closePopup(document.querySelector('.popup_opened'));
    }
};

//закрытие попапов по оверлею
const closeByOverlay = (evt) => {
    if ((evt.target.classList.contains('popup__close')) || (evt.target.classList.contains('popup_opened'))) {
        closePopup();
    }
};

//объявляем общую функцию открытия попапов
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc);
    document.addEventListener('click', closeByOverlay);
}
//объявляем общую функцию кнопки закрытия попапов
const closePopup = () => {
    const popup = document.querySelector('.popup_opened');
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc);
    document.removeEventListener('click', closeByOverlay);
}
//объявляем функцию кнопки сохранения изменений
const submitEditPopup = (evt) => {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value.trim();
    jobProfile.textContent = jobInput.value.trim();
    closePopup(popupEdit);
}

//слушатель кнопки открытия попапа редактирования
editButton.addEventListener('click', () => {
    openPopup(popupEdit);
    formPersonalDataValitation.resetErrorForm();
    nameInput.value = nameProfile.textContent.trim();
    jobInput.value = jobProfile.textContent.trim();
});
//слушатель кнопки сохранения изменений попапа редактирования
submitEditForm.addEventListener('submit', submitEditPopup);

//слушатель кнопки открытия попапа добавления карточек
buttonAdd.addEventListener('click', () => {
    openPopup(popupAdd);
    formAddCardValitation.resetErrorForm();
});

//попап изображения
function openImagePopup(cardData) {
    openImg.src = cardData.link;
    openImg.alt = cardData.name;
    imgCaption.textContent = cardData.name;
    openPopup(imgPopup);
}
//добавление массива карточек на страницу
function addElement(card, item) {
    card.prepend(item);
}

function createCard(element) {
    const card = new Card(element, templateSelector, openImagePopup);
    const cardElement = card.createCard();
    return cardElement;
}

//вставка карточек из массива
initialCards.forEach((element) => {
    addElement(container, createCard(element));
});

//слушатель кнопки добавления карточки с местом
createForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const cardData = {name: placeInput.value, link: linkInput.value}

    addElement(container, createCard(cardData));
    evt.target.reset();

    closePopup(popupAdd);
});

const formPersonalDataValitation = new FormValidator(validationConfig, popupEdit);
formPersonalDataValitation.enableValidation();

const formAddCardValitation = new FormValidator(validationConfig, popupAdd);
formAddCardValitation.enableValidation();