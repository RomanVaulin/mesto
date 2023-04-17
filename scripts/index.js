//Попап редактирования
const editButton = document.querySelector('.profile__edit-button');//находим кнопку редактирования имени и рода деятельности
const popupEdit = document.querySelector('.popupEdit');//находим весь попап

const submitForm = popupEdit.querySelector('.popupEdit__form');//находим форму попапа редактирования имени и рода деятельности
const nameProfile = document.querySelector('.profile__name');//находим строку с именем 
const jobProfile = document.querySelector('.profile__description');//находим строку с родом деятельности
const nameInput = popupEdit.querySelector('.popupEdit__field_name_input');//находим ввод нового имени
const jobInput = popupEdit.querySelector('.popupEdit__field_description_input');//находим ввод нового рода деятельности

const buttonAdd = document.querySelector('.profile__add-button');//находим кнопку добавления карточек
const template = document.querySelector('#card');//находим темплейт карточки
const container = document.querySelector('.elements');//находим место добавления карточек
const popupAdd = document.querySelector('.popupAdd');//находим попап добавления карточек
const placeInput = popupAdd.querySelector('.popupAdd__field_place_input');//находим ввод нового места
const linkInput = popupAdd.querySelector('.popupAdd__field_link_input');//находим ввод ссылки на картинку
const createForm = popupAdd.querySelector('.popupAdd__form');//находим форму попапа создания места с картинкой
const imgPopup = document.querySelector('.popupImage');//находим попап изображения
const openImg = imgPopup.querySelector('.popupImage__image-opened');//находим элемент открытия изображения
const imgCaption = imgPopup.querySelector('.popupImage__caption');//находим подпись фотографий
const closeButtons = document.querySelectorAll('.popup__close');//находим все кнопки закрытия форм

//массив 6 карточек для пр5
const initialCards = [
    {
        place: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        place: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        place: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        place: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        place: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        place: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

//объявляем общую функцию открытия попапов
function openPopup(popup) {
    popup.classList.add('popup_opened');
}
//объявляем общую функцию кнопки закрытия попапов
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}
//объявляем функцию кнопки сохранения изменений
function submitPopup(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value.trim();
    jobProfile.textContent = jobInput.value.trim();
    closePopup(popupEdit);
}

//слушатель кнопки открытия попапа редактирования
editButton.addEventListener('click', () => {
    openPopup(popupEdit);
    nameInput.value = nameProfile.textContent.trim();
    jobInput.value = jobProfile.textContent.trim();
});
//слушатель кнопки сохранения изменений попапа редактирования
submitForm.addEventListener('submit', submitPopup);

//функиця обработчик всех кнопок закрытия попапов
closeButtons.forEach((button) => {
    // находим 1 раз ближайший к крестику попап 
    const popup = button.closest('.popup');
    // устанавливаем обработчик закрытия на крестик
    button.addEventListener('click', () => closePopup(popup));
});

//слушатель кнопки открытия попапа добавления карточек
buttonAdd.addEventListener('click', () => {
    openPopup(popupAdd)
});

//объявляем функцию создания карточек
const addCard = (item) => {
    const cardElement = template.content.cloneNode(true);
    const imgLink = cardElement.querySelector('.element__image');
    const placeLink = cardElement.querySelector('.element__description');
    imgLink.src = item.link;
    imgLink.alt = item.place;
    placeLink.textContent = item.place;

    //попап изображения
    imgLink.addEventListener('click', () => {
        imgPopup.classList.add('popup_opened');
        openImg.src = item.link;
        imgLink.alt = item.place;
        imgCaption.textContent = item.place;
    })

    //кнопка лайка
    const cardLike = cardElement.querySelector('.element__like-button');
    cardLike.addEventListener('click', () => {
        cardLike.classList.toggle('element__like-button_active');
    });
    //кнопка удаления
    const cardDelete = cardElement.querySelector('.element__trash');
    const handleDeleteCardClick = (evt) => {
        evt.target.closest('.element').remove();
    }
    //слушатели кнопока удаления и лайка
    cardDelete.addEventListener('click', handleDeleteCardClick);
    cardLike.addEventListener('click', cardLike);

    return cardElement;
};

const addElement = (card, item) => {
    card.prepend(addCard(item));
}
//вставка карточек из массива
initialCards.forEach((item) => {
    addElement(container, item);
});
//слушатель кнопки добавления карточки с функцией
createForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    place = placeInput.value;
    link = linkInput.value;

    addElement(container, {place, link});
    evt.target.reset();

    closePopup(popupAdd);
});