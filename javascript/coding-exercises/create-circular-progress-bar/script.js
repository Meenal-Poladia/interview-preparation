const number = document.getElementById('number');

let counter = 0;

const interval = setInterval(() => {
    if (counter === 65) {
        clearInterval(interval);
    } else {
        counter +=1
        number.innerHTML = counter + '%';
    }
}, 25)
