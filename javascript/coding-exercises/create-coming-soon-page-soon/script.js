const countDownTimer = new Date('December 2024 31').getTime();

let interval;

interval = setInterval(() => {
    const now = new Date().getTime();
    const elapsedTime = countDownTimer - now;

    const days = Math.floor(elapsedTime/ (1000 * 60 * 60 * 24));
    const hours = Math.floor( (elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = `${days}`;
    document.getElementById('hours').innerHTML = `${hours}`;
    document.getElementById('minutes').innerHTML = `${minutes}`;
    document.getElementById('seconds').innerHTML = `${seconds}`;

    if (elapsedTime < 0) {
        document.getElementById('days').innerHTML = '00';
        document.getElementById('hours').innerHTML = '00';
        document.getElementById('minutes').innerHTML = '00';
        document.getElementById('seconds').innerHTML = '00';
        clearInterval(interval);
    }

}, 1000)


console.log(countDownTimer);