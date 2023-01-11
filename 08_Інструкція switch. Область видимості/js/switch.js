/*
 * Switch case
 */

// switch (значення) {
//   case значення:
//     інструкції;
//     break;

//   case значення:
//     інструкції;
//     break;

//   default:
//     інструкції;
// }
// =======================if else================================

// let cost = null;
// const subscription = "";

// if (subscription === "free") {
//   cost = 0;
// } else if (subscription === "pro") {
//   cost = 100;
// } else if (subscription === "premium") {
//   cost = 500;
// } else {
//   console.log("Invalid subscription type");
// }

// console.log(cost); // 500
// =======================================================
// let cost;
// const subscription = "pro";

// switch (subscription) {
//   case "premium": {
//     cost = 500;
//     break;
//   }

//   case "free": {
//     cost = 0;
//     break;
//   }

//   case "pro": {
//     cost = 100;
//     break;
//   }
//   default: {
//     console.log("Invalid subscription type");
//   }
// }

// console.log(cost); // 500
// ================================================================

// const num = 3;

// if (num === 1) {
//   console.log("Це число 1");
// } else if (num === 2) {
//   console.log("Це число 2");
// } else if (num === 3) {
//   console.log("Це число 3");
// } else {
//   console.log("Це якесь інше число");
// }

// switch (num) {
//   case 1: {
//     console.log("Це число 1");
//     break;
//   }
//   case 2: {
//     console.log("Це число 2");
//     break;
//   }
//   case 3: {
//     console.log("Це число 3");
//     break;
//   }
//   default: {
//     console.log("Це якесь інше число");
//   }
// }

// =================================================================

/*
?  Перепишіть код за допомогою однієї конструкції switch:
*/

// const number = Number(prompt("Введіть число між 0 та 3"));

// if (number === 0) {
//   alert("Ви ввели число 0");
// } else if (number === 1) {
//   alert("Ви ввели число 1");
// } else if (number === 2 || number === 3) {
//   alert("Ви ввели число 2, а може і 3");
// } else {
//   alert("Ви ввели якесь інше число");
// }

// switch (number) {
//   case 0: {
//     alert("Ви ввели число 0");
//     break;
//   }
//   case 1: {
//     alert("Ви ввели число 1");
//     break;
//   }
//   case 2:
//   case 3: {
//     alert("Ви ввели число 2, а може і 3");
//     break;
//   }
//   default: {
//     alert("Ви ввели якесь інше число");
//   }
// }

// const value = 5;

// if (true) {

//   console.log("Block scope: ", value); // 5
// }
// console.log("Global scope: ", value); // 5

// =============================Область видимості=====================================

// const global = "global";

// if (true) {
//   const blockA = "block A";

//   // Бачимо глобальну + локальну A
//   console.log(global); // 'global'
//   console.log(blockA); // block A

//   // Змінні blockB і blockC не знайдені в доступних областях видимості.
//   // Буде помилка звернення до змінної.
//   console.log(blockB); // ReferenceError: blockB is not defined
//   console.log(blockC); // ReferenceError: blockC is not defined

//   if (true) {
//     const blockB = "block B";

//     // Бачимо глобальну + зовнішню A + локальну B
//     console.log(global); // global
//     console.log(blockA); // block A
//     console.log(blockB); // block B

//     // Змінна blockC не знайдена в доступних областях видимості.
//     // Буде помилка звернення до змінної.
//     console.log(blockC); // ReferenceError: blockC is not defined
//   }
// }

// if (true) {
//   const blockC = "block C";

//   // Бачимо глобальну + локальну C
//   console.log(global); // global
//   console.log(blockC); // block C

//   // Змінні blockA і blockB не знайдені в доступних областях видимості.
//   // Буде помилка звернення до змінної.
//   console.log(blockA); // ReferenceError: blockA is not defined
//   console.log(blockB); // ReferenceError: blockB is not defined
// }

// // Бачимо лише глобальну
// console.log(global); // global

// // Змінні blockA, blockB і blockC не знайдені в доступних областях видимості.
// // Буде помилка звернення до змінної.
// console.log(blockA); // ReferenceError: blockA is not defined
// console.log(blockB); // ReferenceError: blockB is not defined
// console.log(blockC); // ReferenceError: blockC is not defined
