/*
 * Делегування подій
 * - загальний слухач
 * - фільтер цілі кліка
 */

const container = document.querySelector(".js-container");
// const body = document.querySelector("body");

container.addEventListener("click", onClick);

// body.addEventListener("click", onClick);

function onClick(e) {
  if (e.target.nodeName !== "BUTTON") {
    return
  }
  console.log("e.target:>>", e.target.textContent);

}

/*
 * Код добавлення кнопок
 */
const addBtn = document.querySelector('.js-add-btn');
let labelCounter = 6;

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
  const btn = document.createElement('button');
  btn.textContent = `Кнопка ${labelCounter}`;
  btn.type = 'button';

  container.appendChild(btn);
  labelCounter += 1;
}
