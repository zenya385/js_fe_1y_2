/*
 * Події.
 * - створення та видалення слухачів подій.
 * - Іменування колбеків для слухачів.
 *    - handle*: handleSubjectEvent - обробка предметної події
 *    - *Handler: subjectEventHandler - обробник події предмета
 *    - on*: onSubjectEvent - на предметну подію (додія на предметі)
 *  - Патерн об'єкт посилань
 *  - event
 * - Посилальна ідентичність колбеків (лінкова ідентичність колбеків)
 * - Объект события
 * - formData https://developer.mozilla.org/ru/docs/Web/API/FormData
 */

//6 ===================== створення та видалення подій.

//4 Метод addEventListener() - створенння слухача події;
//2 element.addEventListener(event, handler, options);

//3 event - ім'я події, рядок, наприклад "click".
//3 handler - колбек-функція, яка буде викликана під час настання події.
//3 options - необов'язковий об'єкт параметрів з розширеними налаштуваннями.

// const button = document.querySelector(".my-button");

// button.addEventListener("click", () => {
//   console.log("Button was clicked");
// });

// const handleClick = () => {
//   console.log("Button was clicked");
// };
// button.addEventListener("click", handleClick);

//4 Метод addEventListener() - видалення слухача події;
//2  element.removeEventListener(event, handler, options);

// const singleBtn = document.querySelector("#single");
// const multiBtn = document.querySelector("#multiple");

// const onBtnClick = () => {
//   console.log("клікнули по кнопці single");
// };
// singleBtn.addEventListener("click", onBtnClick);

// ==========================================================

// const firstCallback = () => {
//   console.log("перший колбек!");
// };
// const secondCallback = () => {
//   console.log("другий колбек!");
// };
// const thirdCallback = () => {
//   console.log("третій колбек!");
// };
// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);


// const button = document.querySelector('button')
// const handleClick = (event) => {
//   console.log(event);
// };

// button.addEventListener("click", handleClick);