let speech = new SpeechSynthesisUtterance();
const speechButton = document.getElementById('listen-button');
const textInput = document.getElementById('text-input');

let voices = [];
let voiceSelect = document.getElementById('select-accent');

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, index) => {
        voiceSelect.options[index] = new Option(voice.name, index);
    })
}

voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value];
})

speechButton.addEventListener('click', () => {
    speech.text = textInput.value;
    window.speechSynthesis.speak(speech);
});
