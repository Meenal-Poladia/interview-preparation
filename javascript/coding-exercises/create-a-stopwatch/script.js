let [hours, minutes, seconds] = [0, 0, 0];
let watchTime = document.getElementById('watch');
let timer = null;

const manageStopWatch = () => {
  seconds++;
  if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
          minutes = 0;
          hours++;
      }
  }
  let h = hours < 10 ? `0${hours}` : hours;
  let m = minutes < 10 ? `0${minutes}` : minutes;
  let s = seconds < 10 ? `0${seconds}` : seconds;

  watchTime.innerHTML = h + ':' + m + ':' + s;
};

const startWatch = () => {
    if (timer) {
        clearInterval(timer);
    } else {
        timer = setInterval(manageStopWatch, 1000);
    }
};

const pauseWatch = () => {
    clearInterval(timer);
    timer = null;
}

const resetWatch = () => {
    if (timer) {
        clearInterval(timer);
        [hours, minutes, seconds] = [0, 0, 0];
        watchTime.innerText = '00:00:00';
    }
}