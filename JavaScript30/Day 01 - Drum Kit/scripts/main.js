const keys = document.querySelectorAll('.key');

function playSound(e) {
    const keyCode = e.keyCode;
    const key = document.querySelector(`.key[data-key='${keyCode}']`);
    const audio = document.querySelector(`audio[data-key='${keyCode}']`);

    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0
    audio.play();
}

function removeTransition(e) {
    this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);