const toastBox = document.getElementById('toast-box');

const successMessage = ' ✅ Successfully submitted.';
const errorMessage = ' 🚫 Please fix the error';
const invalidMessage = ' ❌ Something is invalid in the response';

const showToast = (message) => {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerText = message;

    toastBox.appendChild(toast);

    if (message.includes('Successfully')) {
        toast.classList.add('success');
    } else if (message.includes('error')) {
        toast.classList.add('error');
    } else if (message.includes('invalid')) {
        toast.classList.add('invalid');
    }

    setTimeout(() => {
        toast.remove();
    }, 5000)
}