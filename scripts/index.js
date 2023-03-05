//Попап редактирования
const editButton = document.querySelector('.profile__edit-button');//находим кнопку редактирования имени и рода деятельности
const popupEdit = document.querySelector('.popupEdit');//находим весь попап
const closeEditBtn = popupEdit.querySelector('.popupEdit__close-button');//находим кнопку закрытия попапа редактирования имени и рода деятельности
const submitButton = popupEdit.querySelector('.popupEdit__form');//находим форму попапа редактирования имени и рода деятельности
const nameProfile = document.querySelector('.profile__name');//находим строку с именем 
const jobProfile = document.querySelector('.profile__description');//находим строку с родом деятельности
const nameInput = popupEdit.querySelector('.popupEdit__field_name_input');//находим ввод нового имени
const jobInput = popupEdit.querySelector('.popupEdit__field_description_input');//находим ввод нового рода деятельности

//объявляем функцию кнопки редактирования имени и рода деятельности
const handleEditButtonClick = () => {
    popupEdit.classList.add('popupEdit_opened');
    nameInput.value = nameProfile.textContent.trim();
    jobInput.value = jobProfile.textContent.trim();
}
//объявляем функцию кнопки закрытия формы
const handleCloseButtonClick = () => {
    popupEdit.classList.remove('popupEdit_opened');
}
//объявляем функцию кнопки сохранения изменений
function handleSubmitButtonSubmit(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value.trim();
    jobProfile.textContent = jobInput.value.trim();
    handleCloseButtonClick();
}

//слушатель кнопки открытия попапа редактирования
editButton.addEventListener('click', handleEditButtonClick);
//слушатель кнопки закрытия попапа редактирования
closeEditBtn.addEventListener('click', handleCloseButtonClick);
//слушатель кнопки сохранения изменений попапа редактирования
submitButton.addEventListener('submit', handleSubmitButtonSubmit);




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

const buttonAdd = document.querySelector('.profile__add-button');//находим кнопку добавления карточек
const template = document.querySelector('#card');//находим темплейт карточки
const container = document.querySelector('.elements');//находим место добавления карточек
const popupAdd = document.querySelector('.popupAdd');//находим попап добавления карточек
const closeAddBtn = popupAdd.querySelector('.popupAdd__close-button');//находим кнопку закрытия попапа добавления карточек
const placeInput = popupAdd.querySelector('.popupAdd__field_place_input');//находим ввод нового места
const linkInput = popupAdd.querySelector('.popupAdd__field_link_input');//находим ввод ссылки на картинку
const createButton = popupAdd.querySelector('.popupAdd__form');//находим форму попапа создания места с картинкой

//объявляем ф-цию открытия попапа добавления карточек
const handleAddButtonClick = () => {
    popupAdd.classList.add('popupAdd_opened');
}
//объявляем ф-цию кнопки закрытия попапа добавления карточек
const handleCloseAddBtnClick = () => {
    popupAdd.classList.remove('popupAdd_opened');
}

//объявляем функцию создания карточек
const addCard = (item) => {
    const cardElement = template.content.cloneNode(true);
    const imgLink = cardElement.querySelector('.element__image');
    const placeLink = cardElement.querySelector('.element__description');
    imgLink.src = item.link;
    imgLink.alt = item.place;
    placeLink.textContent = item.place;

    //попап изображения
    const imgPopup = document.querySelector('.element__image_popup');
    const imgPopupCloseBtn = imgPopup.querySelector('.element__image_close-button');
    const openImg = imgPopup.querySelector('.element__image_opened');
    const imgCaption = imgPopup.querySelector('.element__image_caption');

    imgLink.addEventListener('click', () => {
        imgPopup.classList.add('element__image_popup_opened');
        openImg.src = item.link;
        imgCaption.textContent = item.place;
    })

    imgPopupCloseBtn.addEventListener('click', () => {
        imgPopup.classList.remove('element__image_popup_opened');
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
createButton.addEventListener('submit', (evt) => {
    evt.preventDefault();
    place = placeInput.value;
    link = linkInput.value;

    addElement(container, {place, link});
    placeInput.value = '';
    linkInput.value = '';

    handleCloseAddBtnClick();
})

//слушатель кнопки открытия попапа добавления карточек
buttonAdd.addEventListener('click', handleAddButtonClick);
//слушатель кнопки закрытия попапа добавления карточек
closeAddBtn.addEventListener('click', handleCloseAddBtnClick);