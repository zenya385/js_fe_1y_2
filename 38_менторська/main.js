// "use strict";

const fruits = [
  "apple",
  "strawberry",
  "pineapple",
  "banana",
  "lemon",
  "kiwi",
  "coconut",
  "peach",
  "mango",
  "pear",
  "blackberry",
  "blueberry",
];

//* ============== Пребираючі методи масиву ===========================

//4 =========== for ===============
// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(fruits[i]);
// }

//4 =========== for of ===============
// for (const el of fruits) {
//   console.log(el);
// }

//4 =========== forEach() ===============
// fruits.forEach((el) => {
//   console.log(el);
// });

//4 =========== map() ===============

// const newFruits = fruits.map((el) => el.toUpperCase());
// console.log(newFruits);

//4 =========== filter() ===============

// const filterBerry = fruits.filter((el) => {
//   return el.includes("berry");
// });
// console.log(filterBerry);

//4 =========== find() ===============

// const findBerry = fruits.find((el) => {
//   return el.includes("berry");
// });
// console.log(findBerry);

// //4 =========== findIndex() ===============
// // fruits.findIndex((el) => el === "blackberry");
// console.log(fruits.findIndex((el) => el === "blackberry"));

//4 =========== every() ===============
// fruits.findIndex((el) => el === "blackberry");
// console.log(fruits.every((el) => el === "blackberry"));

//4 =========== some() ===============
// fruits.findIndex((el) => el === "blackberry");
// console.log(fruits.some((el) => el === "blackberry"));

//4 =========== reduce() ===============
const total = [2, 7, 3, 14, 6].reduce((acc, num) => {
  return acc + num;
}, 0);
// console.log(total);

//4 =========== sort() =============== Мутабельний
fruits.sort();
// console.log(fruits);

//* =================================== дескриптори властивостей об'єктів ===============

// let user = {
//   name: "Іван",
// };

// user.name = "Петро";

// let descriptor = Object.getOwnPropertyDescriptor(user, "name");

// alert(JSON.stringify(descriptor, null, 2));

// console.log(user.);

let user = {
  name: "Іван",
};

Object.defineProperty(user, "name", {
  writable: false,
});
user.name = "Петро";
// let descriptor = Object.getOwnPropertyDescriptor(user, "name");

// alert(JSON.stringify(descriptor, null, 2));

// console.log(user);
