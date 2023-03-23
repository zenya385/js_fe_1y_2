const refs = {
  startBtn: document.querySelector("button[data-action-start]"),
  stopBtn: document.querySelector("button[data-action-stop]"),
  clockface: document.querySelector(".js-clockface"),
};

const timer = {
  intevalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }
    const startTime = Date.now(); // стартовий час
    this.isActive = true;

    this.intevalId = setInterval(() => {
      const currentTime = Date.now(); // діючий час
      const deltaTime = currentTime - startTime;
      const time = getTimeComponents(deltaTime);
      updateClockface(time);
    }, 1000);
  },
  stop() {
    clearInterval(this.intevalId);
    this.isActive = false;
  },
};

refs.startBtn.addEventListener("click", () => {
  timer.start();
});
refs.stopBtn.addEventListener("click", () => {
  timer.stop();
});

//     * - Приймає час у мілісекундах
//     * - Вираховує скільки в них вміщається годин/хвил/секунд
//     * - Повертає об'єкт із властивостями hours, mins, secs
//     * - Пекельна копіпаста зі стека

function getTimeComponents(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { hours, mins, secs };
}

/*
 * Приймає число, приводить до рядка і добавляє спочатку 0 якщо
 * число меньше 2-х знаків
 */
function pad(value) {
  return String(value).padStart(2, "0");

  //*   1 -> 01
  //*   2 -> 02
  //*   3 -> 03
  //*   12 -> 12
}

/*
 * - Приймає час в мілісекундах
 * - Вираховує скільки в них годин/хвилин/секунд
 * - Малює интерфейс
 */
function updateClockface({ hours, mins, secs }) {
  refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}
