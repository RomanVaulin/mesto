const initialCards = [
    {
        title: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        title: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        title: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        title: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        title: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        title: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
// export { initialCards };

const editButton = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const templateSelector = "#card";
const popupProfileSelector = '.popupEdit';
const popupAddCardSelector = '.popupAdd';
const popupImageSelector = '.popupImage';
const containerSelector = '.elements';
const configUser = {
    nameProfileSelector: '.profile__name',
    jobProfileSelector: '.profile__description'
};
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__error_visible'
};

export {
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
};