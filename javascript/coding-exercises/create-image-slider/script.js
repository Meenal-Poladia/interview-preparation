const slides = document.querySelectorAll('img');
const prevButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const dotContainer = document.querySelector('.dot-container');

let counter = 0;
let slidesLength = slides.length - 1;

const loadImages = () => {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${index * 100}%)`
    })
};

const moveImage = () => {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - counter) * 100}%)`
    })
};

const moveImageToRight = () => {
    if (counter === slidesLength) {
        counter = 0;
        moveImage();
        addDotActiveClass();
    }
    else  {
        counter++;
        moveImage();
        addDotActiveClass();
    }
};

const moveImageToLeft = () => {
    if (counter === 0) {
        counter = slidesLength;
        moveImage();
        addDotActiveClass();
    }
    else  {
        counter--;
        moveImage();
        addDotActiveClass();
    }
};

const createDots = () => {
    slides.forEach((_, index) => {
        dotContainer.insertAdjacentHTML('beforeend',
            `
           <button class="dots-dot" data-slide="${index}">
           </button>
           `)
    })
};

const addDotActiveClass = () => {
    document.querySelectorAll('.dots-dot')
        .forEach((dot, index) => {
            dot?.classList?.remove('dot-active');
        })
    document.querySelector(`.dots-dot[data-slide='${counter}']`)
        .classList.add('dot-active');
};

const handleDotClicked = (e) => {
    if (e.target.classList.contains('dots-dot')) {
        counter = e.target.dataset.slide;
        moveImage();
        addDotActiveClass()
    }
};

const automaticallyMoveImage = () => {
    if (counter === slidesLength) {
        counter = 0;
        moveImage();
        addDotActiveClass();
    }
    else  {
        counter++;
        moveImage();
        addDotActiveClass();
    }
}

/* This code is for automatically sliding images - Starts Here */
const automaticallyChangeImages = () => {
    setInterval(() => {
        automaticallyMoveImage();
    }, 2000)
}
automaticallyChangeImages();
/* This code is for automatically sliding images - End Here */

createDots();
loadImages();
addDotActiveClass();

nextButton.addEventListener('click', moveImageToRight);
prevButton.addEventListener('click', moveImageToLeft);
dotContainer.addEventListener('click', handleDotClicked);

//Using the arrow keys to move the images to left and right
document.addEventListener('keydown', (e) => {
    e.key === 'ArrowLeft' && moveImageToLeft();
    e.key === 'ArrowRight' && moveImageToRight();
});
