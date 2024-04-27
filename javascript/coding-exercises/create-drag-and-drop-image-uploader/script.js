const dropArea = document.getElementById('drop-area');
const inputFile = document.getElementById('input-file');
const imageView = document.getElementById('image-view');

const uploadImage = () => {
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imageView.style.backgroundImage = `url(${imgLink})`;
    imageView.textContent = '';
    imageView.style.border = 'none';
}

inputFile.addEventListener('change', uploadImage);

dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
})

dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();
})