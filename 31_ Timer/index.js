// import "./css/common.css";

const refs = {
  startBtn: document.querySelector("button[data-action-start]"),
  stopBtn: document.querySelector("button[data-action-stop]"),
  clockface: document.querySelector(".js-clockface"),
};

const timer = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    const startTime = Date.now(); //3 Стартовий час
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      // console.log('kjuukgA:>>', )
      // console.log(startTime - currentTime);
      const deltaTime = currentTime - startTime;
      // const timeComponent = getTimeComponents(deltaTime);
      // const { hours, mins, secs } = getTimeComponents(deltaTime);
      const timer = getTimeComponents(deltaTime);
      updateClockface(timer);
      // console.log("timeComponent:>>", timeComponent);
      // console.log("XX:XX:XX");
      // console.log(`${hours}:${mins}:${secs}`); //1 start timer
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};
timer.start();

refs.startBtn.addEventListener("click", () => {
  timer.start();
});
refs.stopBtn.addEventListener("click", () => {
  timer.stop();
});

function getTimeComponents(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { hours, mins, secs };
}

/*
 * Приймає число, приводить до рядка і добавляє спочатку 0 якщо число меньше 2-х знаків
 */
function pad(value) {
  return String(value).padStart(2, "0");

  //3  1 -> 01
  //3  2 -> 02
  //3  3 -> 03
  //3  12 -> 12
}

/*
 * - Приймає час в мілісекундах
 * - Вираховує скільки в них годин/хвилин/секунд
 * - Малює интерфейс
 */
function updateClockface({ hours, mins, secs }) {
  refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}
