/*
 * Сhatty events
 * Методи  throttling и debouncing з бібліотеки Lodash
 */

const mouseMowe = document.querySelector(".js-coords");

let mouseCount = 0;

window.addEventListener(
  "mousemove",
  _.throttle((e) => {
    mouseCount += 1;

    mouseMowe.textContent = ` к-ть mouseCount: ${mouseCount},
  X: ${e.clientX},
   Y: ${e.clientY}`;
  }, 500)
);

const input = document.querySelector(".js-input");
const output = document.querySelector(".js-output");

let inputCount = 0;

input.addEventListener(
  "input",
  _.debounce(
    (e) => {
      inputCount += 1;
      output.textContent = ` к-ть inputCount: ${inputCount},
  Значення: ${e.target.value}`;
    },
    1000,
    { trailing: false, leading: true }
  )
);
