const imageBox = document.querySelector('.img-box');
const imageWrap = document.querySelector('.img-wrap');
const arrowIcon = document.querySelector('.arrow-icon');
const originalImage = document.getElementById('original-image');
const line = document.getElementById('line');

const leftSpace = imageBox.offsetLeft;

originalImage.style.width = imageBox.offsetWidth + 'px';

imageBox.onmousemove = (e) => {
    const boxWidth = (e.pageX - leftSpace) + 'px';
    imageWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}