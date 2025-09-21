const alerta = new Audio("../static/styles/red-alert_nuclear_buzzer-99741.mp3");
const timerEl = document.getElementById('timer');
let hours = parseInt(document.getElementById('hours_input').value);
let minutes = parseInt(document.getElementById('minutes_input').value);
let seconds = parseInt(document.getElementById('seconds_input').value);
let timer = (hours * 360000) + (minutes * 6000) + (seconds * 100);
let intervalId = 0;

const formatTime = (time) => {
  let hours = Math.floor(time / 360000);
  let minutes = Math.floor((time % 360000) / 6000);
  let seconds = Math.floor(((time % 6000) / 100));

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const setTimer = (time) => {
  timerEl.innerText = formatTime(time);
};

const ToggleTimer = () => {
    const button = document.getElementById('power');
    const action = button.getAttribute('action');

    if (action == 'start') {
        let hours = document.getElementById('hours_input').value;
        let minutes = document.getElementById('minutes_input').value;
        let seconds = document.getElementById('seconds_input').value;
        timer = (hours * 360000) + (minutes * 6000) + (seconds * 100);
        setTimer(timer);
    }

    clearInterval(intervalId);

    if (action == 'start' || action == 'continue') {

        setTimer(timer);

        intervalId = setInterval(() => {
            timer -= 1;

            if (timer <= 0) {
                clearInterval(intervalId);
                timer = 0;
                setTimer(timer);
                button.setAttribute('action', 'start');
                button.innerText = 'Iniciar';
                alert('O tempo acabou!');
                alerta.play();
                return;
            }

            setTimer(timer);   
        }, 10);
    
        button.setAttribute('action', 'pause');
        button.innerText = 'Pause';

    } else if (action == 'pause') {
        button.setAttribute('action', 'continue');
        button.innerText = 'Continuar';
    }
};

const resetTimer = () => {
    clearInterval(intervalId);
    timer = 0;
    setTimer(timer);
    const button = document.getElementById('power');
    button.setAttribute('action', 'start');
    button.innerText = 'Iniciar';
};

document.getElementById('power').addEventListener('click', ToggleTimer);
document.getElementById('reset').addEventListener('click', resetTimer);