// #Функції

//$ Оголошення функції (Function Declaration)
//$ Параметри та аргументи
//$ Повернення значення
//$ Порядок виконання коду
//$ Параметри за замовчуванням
//$ Псевдомасив arguments
//$ Перетворення псевдомасиву
//$ Патерн «Раннє повернення»
//$ Функціональний вираз (Function Expression)

// const arr1 = [1, 2, 3, 6];
// const arr2 = [
//   [1, 2],
//   [3, 6],
// ];

// const allArr = arr1.concat(arr2);
// console.log("allArr", allArr);

//$* ======================== Оголошення функції(Function Declaration)==========
// function назва_функції(параметр_1, параметр_2...) {
// тіло функції
// }

// function fun(a, b, c) {
//   console.log("консоль під час викликлику функції");
// }

// console.log("консоль до викликлику функції");
// fun();
// console.log("консоль після викликлику функції");

// Поширена практика розпочинати ім’я функції зі словесного префіксу, який описує дію. В команді має бути домовленість щодо значення префіксів.

// Наприклад, функції, які починаються з префіксу "show" зазвичай щось показують.

// Функції, які починаються з …

// "get…" – повертають значення,
// "calc…" – щось обчислюють,
// "create…" – щось створюють,
// "check…" – щось перевіряють і повертають булеве значення.
// Ось приклади таких імен:

// showMessage(..)     // показує повідомлення
// getAge(..)          // повертає вік (якось його отримує або обчислює)
// calcSum(..)         // обчислює суму і повертає результат
// createForm(..)      // створює форму (і зазвичай її повертає)
// checkPermission(..) // перевіряє доступ, повертає true/false

//$** =======================Параметри та аргументи============================
// Оголошення параметрів x, y, z
// const multiply = function (x, y, z) {
//   console.log(`Результат множення дорівнює ${x + y + z}`);
//   return x + y + z;
// };

// console.log(multiply(1, 1, 6));
// multiply(4, 5, 6);
// multiply(1, 1, 1);
// multiply(2, 2, 2);
// multiply(3, 3, 3);

// const multiply = function (items) {
//   console.log(`Результат items у середині функції`, items);
//   let total = 0;
//   for (const item of items) {
//     total += item;
//   }
//   return total;
// };

// console.log(multiply([4, 5, 6]));
// console.log(multiply([1, 1, 1]));
// console.log(multiply([2, 2, 2]));
// console.log(multiply([3, 3, 3]));

//$* ========================Повернення значення===============================
// function multiply(x, y, z) {
//   console.log("Код до return виконується звичайним чином");

//   // Повертаємо результат виразу множення
//   return x * y * z;
//   console.log("Цей лог ніколи не виконається, він стоїть після return");
// }

// // Результат роботи функції можна зберегти у змінну
// const num = 2;
// let result = multiply(num, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550

//$* ========================Порядок виконання коду============================
// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// console.log("Лог до виклику функції multiply");
// multiply(2,3, 5); // Результат множення дорівнює 30
// console.log("Лог після виклику функції multiply");

// // Послідовність логів в консолі
// // "Лог до виклику функції multiply"
// // "Результат множення дорівнює 30"
// // "Лог після виклику функції multiply"
//$* ========================Параметри за замовчуванням========================
// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1
//$* ========================Псевдомасив arguments=============================
// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }
//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120
//$* ========================Перетворення псевдомасиву=========================
// function fn(...args) {
//   // Змінна args буде містити повноцінний масив
//   // const args = Array.from(arguments);
//   console.log("first", args);
// }
// fn(7, 3, 6, 9);

//$* ========================Патерн «Раннє повернення»=========================
// function withdraw(amount, balance) {
// if (amount === 0) {
//   console.log("Для проведення операції введіть суму більшу за нуль");
// } else if (amount > balance) {
//   console.log("Недостатньо коштів на рахунку");
// } else {
//   console.log("Операція зняття коштів проведена успішно");
// }
// if (amount === 0) {
//   console.log("Для проведення операції введіть суму більшу за нуль");
//   return;
// }
// if (amount > balance) {
//   console.log("Недостатньо коштів на рахунку");
//   return;
// }
// console.log("Операція зняття коштів проведена успішно");
// }

// withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
// withdraw(500, 300); // "Недостатньо коштів на рахунку"
// withdraw(100, 300); // "Операція зняття коштів проведена успішно"
//$* ========================Функціональний вираз (function expression)========
// Синтаксис, що ми раніше використовували, називається Оголошення Функції (Function Declaration):

// sayHi();

// function sayHi() {
//   console.log("Привіт");
// }

// Існує й інший синтаксис для створення функції, що називають Функціональним Виразом (Function Expression).
// Він дозволяє створювати функцію всередині будь-якого виразу.
// Наприклад:

// const sayHi = function () {
//   console.log("Привіт");
// };
