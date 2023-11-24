const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timer = null;
stopBtn.disabled = true;

//generator losowych kolorów w formacie #
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//zmiana koloru tła w interwale, zablokowanie buttona
function bodyColorChanger() {
  body.style.backgroundColor = getRandomHexColor();
  timer = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

//zatrzymanie zmieniania kolorów tła, odblokowanie buttona
function ColorChangerStop() {
  clearInterval(timer);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

//nasłuchiwanie kliknięcia na przyciski
startBtn.addEventListener('click', bodyColorChanger);
stopBtn.addEventListener('click', ColorChangerStop);
