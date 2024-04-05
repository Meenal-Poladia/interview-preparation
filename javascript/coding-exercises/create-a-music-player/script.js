const song = document.getElementById('song');
const progress = document.getElementById('progress');
const controlIcon = document.getElementById('control-icon');

let playAudio = true;

const init = () => {
    progress.max = song.duration;
    console.log(progress);
    progress.value = song.currentTime;
}

const onPlayPause = () => {
    if (playAudio) {
        song.play();
        playAudio = false;
    } else  {
        song.pause();
        playAudio = true;
    }
}

progress.onchange = function () {
    song.play();
    playAudio = false
    song.currentTime = progress.value;
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500)
}

document.addEventListener("DOMContentLoaded", init, false);
