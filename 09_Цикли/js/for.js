// Example 11 - Цикл for
// Напиши цикл for, який виводить у консоль браузера числа за зростанням від min до max, але тільки якщо число кратне 5.

// const max = 100;
// const min = 20;
/*
 * Цикли (while, do while, for)
 */
// while (condition) {
//   // код, тіло циклу (statement)
// }

// let counter = 10;

// while (counter < 100) {
//   console.log("counter: ", counter);
//   counter += 1;
//   // counter = counter + 1;
// }

/*
? Виведіть числа від 1 до 50
*/
// let iterator = 50;

// while (iterator < 50) {
//   console.log("iterator :>> ", iterator);
//   iterator += 1;
//   // iterator = iterator + 1;
// }

/*
? Знайдіть суму чисел від 1 до 100
 */

// let count = 1;
// let totalCount = 0;

// while (count <= 100) {
//   totalCount += count;
//   count += 1;
// }
// console.log("totalCount :>> ", totalCount);

/*
 * Do While
 */
// do {
//   // statement
// } while (condition);

/*
? Напишіть цикл, який пропонує в prompt ввести число більше 100.
? Якщо відвідувач ввів інше число – попросити ввести ще раз.
? Цикл повинен запитувати число, поки відвідувач не введе число, більше 100.
? Передбачається, що відвідувач вводить лише числа;
*/

// let num = Number(prompt("Введіть число більше 100"));

// while (num <= 100) {
//   num = Number(prompt("Введіть число більше 100"));
// }

// let num;
// do {
//   num = Number(prompt("Введіть число більше 100"));
// } while (num <= 100);
// {
//   console.log("num :>> ", num);
// }

/*
 * For
 */
// for (initialization; condition; post - expression) {
//   statements
// }

// for (let i = 1; i <= 30; i += 2) {
//   console.log(i);
// }

/*
? За допомогою циклу for виведіть парні числа від 2 до 10.
*/

// for (let i = 1; i <= 10; i += 1) {
//   if (i % 2 === 0) {
//     console.log("i парні :>> ", i);
//   }
// }

// ================================ break ==============================
// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Знайшли число 3, перериваємо виконання циклу");
//     break;
//   }
// }

// console.log("Лог після циклу");

// ============================== continue =============================

// const number = 10;

// for (let i = 0; i <= number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log("не парне i: ", i); // 1, 3, 5, 7, 9
// }
