const nameError = document.querySelector('.name-error');
const phoneError = document.querySelector('.phone-error');
const emailError = document.querySelector('.email-error');
const messageError = document.querySelector('.message-error');
const submitError = document.querySelector('.submit-error');

const submitButton = document.getElementById('submit-button');

const validateName = () => {
    const nameInput = document.getElementById('name-input').value;

    if (nameInput.length === 0) {
        nameError.innerHTML = 'Name is Required';
        return false;
    }
    /*if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }*/
    nameError.innerHTML = 'Valid';
    return true;
}

const validatePhone = () => {
    const phoneInput = document.getElementById('phone-input').value;

    if (phoneInput.length === 0) {
        phoneError.innerHTML = 'Phone no is Required';
        return false;
    }
    if (phoneInput.length < 10) {
        phoneError.innerHTML = 'Phone no should be more than 10 digits'
        return false;
    }
    if (!phoneInput.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only numbers please';
        return false;
    }
    phoneError.innerHTML = 'Valid'
    return true;
}

const validateEmail = () => {
    const emailInput = document.getElementById('email-input').value;

    if (emailInput.length === 0) {
        emailError.innerHTML = 'Email is Required';
        return false;
    }
    if (!emailInput.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        emailError.innerHTML = 'Email is invalid';
        return  false;
    }
    messageError.innerHTML = 'Valid';
    return  true;


}

const validateMessage = () => {
    const messageInput = document.getElementById('message-input').value;
    const length = 30;
    const characterLeft = length - messageInput.length;

    if (messageInput.length === 0) {
        messageError.innerHTML = 'Message is Required';
        return false;
    }
    if (characterLeft > 0) {
        messageError.innerHTML = `${characterLeft} are characters required.`
        return  false;
    }
    messageError.innerHTML = 'valid';
    return true
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (!validateName() || !validateEmail() || !validateMessage() || !validatePhone()) {
        submitError.innerHTML = 'Please fix the error!'
    }
})


