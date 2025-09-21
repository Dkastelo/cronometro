const timerEl = document.getElementById('timer');
let intervalId = 0;
let timer = 0;

const formatTime = (time) => {
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

const setTimer = (time) => {
    timerEl.innerText = formatTime(time);
}

const ToggleTimer = () => {
    const button = document.getElementById('power');
    const action = button.getAttribute('action');

    clearInterval(intervalId);

    if (action == 'start' || action == 'continue') {
        intervalId = setInterval(() => {
            timer += 1;
            setTimer(timer);
    }, 10);
        button.setAttribute('action', 'pause');
        button.innerText = 'Pause';
    } else if (action == 'pause') {
        button.setAttribute('action', 'continue');
        button.innerText = 'Continuar';
    }
}

const resetTimer = () => {
    clearInterval(intervalId);
    timer = 0;
    setTimer(timer);
    const button = document.getElementById('power');
    button.setAttribute('action', 'start');
    button.innerText = 'Iniciar';
}

document.getElementById('power').addEventListener('click', ToggleTimer);
document.getElementById('reset').addEventListener('click', resetTimer);