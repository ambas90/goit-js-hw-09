const startBt = document.querySelector('button[data-start]');
const stopBt = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timer = null;
stopBt.disabled = true;

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
  startBt.disabled = true;
  stopBt.disabled = false;
}

//zatrzymanie zmieniania kolorów tła, odblokowanie buttona
function ColorChangerStop() {
  clearInterval(timer);
  startBt.disabled = false;
  stopBt.disabled = true;
}

//nasłuchiwanie kliknięcia na przyciski
startBt.addEventListener('click', bodyColorChanger);
stopBt.addEventListener('click', ColorChangerStop);
