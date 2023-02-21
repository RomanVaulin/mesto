const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close-button');

const submitButton = popup.querySelector('.popup__form');

const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__description');
const nameInput = popup.querySelector('.popup__field_name_input');
const jobInput = popup.querySelector('.popup__field_description_input');

const handleEditButtonClick = () => {
    popup.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent.trim();
    jobInput.value = jobProfile.textContent.trim();
}
const handleCloseButtonClick = () => {
    popup.classList.remove('popup_opened');
}

function handleSubmitButtonSubmit (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value.trim();
    jobProfile.textContent = jobInput.value.trim();

    handleCloseButtonClick();
}

editButton.addEventListener('click', handleEditButtonClick);
closeButton.addEventListener('click', handleCloseButtonClick);
submitButton.addEventListener('submit', handleSubmitButtonSubmit);