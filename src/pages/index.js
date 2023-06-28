import './index.css';
import Card from '../components/Сard.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {
    initialCards,
    editButton,
    buttonAdd,
    templateSelector,
    popupProfileSelector,
    popupAddCardSelector,
    popupImageSelector,
    containerSelector,
    configUser,
    validationConfig
} from '../utils/constants.js';

const popupEdit = document.querySelector('.popupEdit');
const popupAdd = document.querySelector('.popupAdd');

const userInfo = new UserInfo(configUser);

editButton.addEventListener('click', () => {
    popupProfile.setInputValue(userInfo.getUserInfo());
    formPersonalDataValitation.resetValidationState();
    popupProfile.open();
});

buttonAdd.addEventListener('click', () => {
    popupAddCard.open();
    formAddCardValitation.resetValidationState();
});

const popupImage = new PopupWithImage(popupImageSelector);
popupImage.setEventListeners();

const section = new Section({
    items: initialCards,
    renderer: (element) => {
       const card = new Card(element, templateSelector, popupImage.openPopup);
       return card.createCard();
    }
}, containerSelector);
section.addCardsFromArray();

const popupProfile = new PopupWithForm(popupProfileSelector, (values) => {
    userInfo.setUserInfo(values);
    popupProfile.close();
});
popupProfile.setEventListeners();

const popupAddCard = new PopupWithForm(popupAddCardSelector, (values) => {
    section.addItem(section.renderer(values))
    popupAddCard.close()
});
popupAddCard.setEventListeners();

const formPersonalDataValitation = new FormValidator(validationConfig, popupEdit);
formPersonalDataValitation.enableValidation();

const formAddCardValitation = new FormValidator(validationConfig, popupAdd);
formAddCardValitation.enableValidation();