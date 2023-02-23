#  Події

<!-- /*
 * Події.
 * - створення та видалення слухачів подій.
 * - Іменування колбеків для слухачів.
 *    - handle*: handleSubjectEvent - обробка предметної події
 *    - *Handler: subjectEventHandler - обробник події предмета
 *    - on*: onSubjectEvent - на предметну подію (додія на предметі)

 *  - Патерн об'єкт посилань

 * - Посилальна ідентичність колбеків (лінкова ідентичність колбеків)
 * - Объект события

 * - formData https://developer.mozilla.org/ru/docs/Web/API/FormData
 */ -->


<!--6 ===================== створення та видалення подій. -->

Метод addEventListener() - створенння слухача події;

element.addEventListener(event, handler, options);
event - ім'я події, рядок, наприклад "click".
handler - колбек-функція, яка буде викликана під час настання події.
options - необов'язковий об'єкт параметрів з розширеними налаштуваннями.

const button = document.querySelector(".my-button");

button.addEventListener("click", () => {
  console.log("Button was clicked");
});



Метод addEventListener() - видалення слухача події;
   element.removeEventListener(event, handler, options);