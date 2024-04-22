const productImage = document.getElementById('product-img');
const button = document.querySelectorAll('.btn');

button[0].onclick = function() {
    productImage.src = './images/image1.png';

    for (bt of button) {
        bt.classList.remove('active');
    }
    this.classList.add('active');
}

button[1].onclick = function() {
    productImage.src = './images/image2.png';

    for (bt of button) {
        bt.classList.remove('active');
    }
    this.classList.add('active');
}

button[2].onclick = function() {
    productImage.src = './images/image3.png';

    for (bt of button) {
        bt.classList.remove('active');
    }
    this.classList.add('active');
}