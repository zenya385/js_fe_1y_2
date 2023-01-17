// const array = ["Mango", "Poly", "Ajax", 2, 54, true];
// console.log("array1 :>> ", array);

// console.log("array[3] :>> ", array[3]);
// console.log("array[0] :>> ", array[0]);
// console.log("array[3] :>> ", array[2]);
// console.log("array[3] :>> ", array[5]);
// console.log("array[3] :>> ", array[4]);

// const str = "JS";

// str = "react";

// console.log("str :>> ", str);
// array[0] = "Pango";
// console.log("arrey2 :>> ", array);
// array[3] = 333;
// console.log("arrey3 :>> ", array);

// ======================length============================
// const clients = ["Mango", "Poly", "Ajax", 2, 54, true];
// const lastEl = clients.length - 1;
// console.log(lastEl); // 3

// console.log("clients :>> ", clients);

// console.log("clients[5] :>> ", clients[0]);

// const num = [5, 5, 8, 7, 9, 3, 77, 78];
// const lastEl = num.length - 1;
// console.log("last number :>> ", lastEl);

// console.log("num[7] :>> ", num[7]);

// console.log("num :>> ", num);

// console.table(num);

// ========================== for =============================

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// for (const client of clients) {
//   console.log("client :>> ", client);
// }
// ============================================
// const str = "Hello word";

// for (const el of str) {
//   console.log("el :>> ", el);
// }

// Будемо шукати ім'я клієнта в масиві імен,
//  якщо знайшли - перериваємо цикл, оскільки немає сенсу шукати далі, імена у нас унікальні.

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Polyqe";
// let message;

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }
//   // message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }
// console.log("message :>> ", message);

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//   console.log(`Число більше за ${threshold}: ${numbers[i]}`);
// }

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }
