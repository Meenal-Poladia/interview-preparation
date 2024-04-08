const submitButton = document.getElementById('submit-button');
const closeButton = document.getElementById('ok-button');
const popup = document.getElementById('popup');

submitButton.addEventListener('click', () => {
    popup.classList.add('open-popup');
})

closeButton.addEventListener('click', () => {
    popup.classList.remove('open-popup');
})