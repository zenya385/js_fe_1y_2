//  * Виведення даних
// console.log() і alert()
// //? ===========================alert()=====================
// Метод alert() виводить модальне вікно, текст якого відповідає значенню
// змінної (або літерала), яку передаємо в дужках.
// const message = "Hello!";
// alert("message =>" + message);
// alert("Привіт група FE_1y_2");

// * Ввод користувача
// * - Методы window.confirm() и window.prompt()
// confirm() - виводить модальне вікно з повідомленням, і дві кнопки, Ok і Cancel.
// Натискаючи на Ok, результатом будет true, натискаючи на Cancel - повертається false.

//? ===========================confirm()=====================
// *Просимо клієнта підтвердити бронювання готелю
// *і зберігаємо результат роботи confirm у змінну
// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

//? ===========================prompt()=====================
// * prompt() - виводить модальне вікно з полем введення і кнопками Ok і Cancel.
// * Натискаючи на Ok, результатом буде те, що ввів користувач, у випадку Cancel - повертається null.

// Запитуємо назву готеля, в якому хотів би зупинитися клієнт
// і зберігаємо результат виклику prompt у змінну.
// const hotelName = prompt("Please enter desired hotel name");
// console.log(typeof hotelName);
// =============================================
//! Важлива особливість prompt полягає в тому, що незалежно від того, що ввів користувач, завжди повернеться рядок.
//! Тобто, якщо користувач ввів 5, то повернеться не число 5, а рядок "5".

// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value); // "5"

// ===================================================

// const shouldRenew = confirm("Бажаєте продавжити підписку?");
// console.log(shouldRenew);
let quantity = prompt("Введіть кількість товарів");
console.log("typeof1=>", typeof quantity);
quantity = Number(quantity);
console.log(quantity);
console.log("typeof2=>", typeof quantity);
