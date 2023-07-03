import './index.css';
import Card from '../components/Сard.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupDeleteCard from '../components/PopupDeleteCard';
import Api from '../components/Api';
import {
    // initialCards,
    editButton,
    buttonAdd,
    // popupEdit,
    // popupAdd,
    // popupAvatar,
    buttonAvatar,
    newCardForm,
    editForm,
    avatarForm,
    templateSelector,
    popupProfileSelector,
    popupAddCardSelector,
    popupImageSelector,
    containerSelector,
    popupAvatarEdit,
    popupDeleteSelector,
    configUser,
    validationConfig
} from '../utils/constants.js';

const userInfo = new UserInfo(configUser);

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-69',
    headers: {
      authorization: '2c454993-8553-4871-88bd-2106e0a9a7fa',
      'Content-Type': 'application/json'
    }
});



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

const deletePopupCard = new PopupDeleteCard(popupDeleteSelector, ({ card, cardId }) => {
    api.deleteCard(cardId)
    .then(() => {
        card.removeCard();
        deletePopupCard.close();
    })
    .catch((error => console.log(`Ошибка удаления карточки ${error}`)))
    .finally(() => deletePopupCard.setDefaultText())
})
deletePopupCard.setEventListeners()

function createNewCard(element) {
    const card = new Card(element, templateSelector, popupImage.openPopup, deletePopupCard.open, (cardId) => {
        const isLiked = card.isMyLike();
        if (isLiked){
            api.deleteLike(cardId)
                .then(res => {
                    card.isLiked(res.likes);
                })
                .catch((error => console.log(`Ошибка снятия лайка ${error}`)))
        } else {
            api.addLike(cardId)
                .then(res => {
                    card.isLiked(res.likes);
                })
                .catch((error => console.log(`Ошибка добавления лайка ${error}`)))
        }
    });
    return card.createCard();
}

const section = new Section((element) => {
        section.addItemAppend(createNewCard(element))
    }, containerSelector);

const popupProfile = new PopupWithForm(popupProfileSelector, editForm, (values) => {
    api.setUserInfo(values)
        .then(res => {
            userInfo.setUserInfo({ username: res.name, job: res.about, avatar: res.avatar });
            popupProfile.close();
        })
        .catch((error => console.log(`Ошибка редактирования личного профиля ${error}`)))
        .finally(() => popupProfile.setDefaultText())
});
popupProfile.setEventListeners();

const popupAddCard = new PopupWithForm(popupAddCardSelector, newCardForm, (values) => {
    api.addCard(values)
        .then(dataCard => {
            dataCard.myId = dataCard.owner._id;
            section.addItem(createNewCard(dataCard))
            popupAddCard.close()
        })
        .catch((error => console.error(`Ошибка при создании карточки ${error}`)))
        .finally(() => popupAddCard.setDefaultText())

    
});
popupAddCard.setEventListeners();

const popupEditAvatar = new PopupWithForm(popupAvatarEdit, avatarForm, (values) => {
    api.setNewAvatar(values)
        .then(res => {
            userInfo.setUserInfo({ username: res.name, job: res.about, avatar: res.avatar });
            popupEditAvatar.close();
        })
        .catch((error) => console.log(`Ошибка изменения аватара ${error}`))
        .finally(() => popupEditAvatar.setDefaultText())
    
})
popupEditAvatar.setEventListeners()

buttonAvatar.addEventListener('click', () => {
    formAvatarValidation.resetValidationState();
    popupEditAvatar.open()
})

const formPersonalDataValitation = new FormValidator(validationConfig, editForm);
formPersonalDataValitation.enableValidation();

const formAddCardValitation = new FormValidator(validationConfig, newCardForm);
formAddCardValitation.enableValidation();

const formAvatarValidation = new FormValidator(validationConfig, avatarForm);
formAvatarValidation.enableValidation();

Promise.all([api.getInfo(), api.getCards()])
    .then(([dataUser, dataCard]) => {
        dataCard.forEach(element => element.myId = dataUser._id);
        userInfo.setUserInfo({ username: dataUser.name, job: dataUser.about, avatar: dataUser.avatar });
        section.addCardsFromArray(dataCard);
    })
    .catch((error) => console.log(`Ошибка при создании начального массива карт ${error}`))

