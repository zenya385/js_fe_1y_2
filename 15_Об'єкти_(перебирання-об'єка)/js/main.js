/*


 * Перебирання об'єкта:
 * -Цикл for...in
 * -Метод hasOwnProperty()
 * -Метод Object.keys()
 * -Метод Object.values()
 * -Метод Object.entries()
 */

// Number, Array, String, Boolean, Object;

//? Отримайте суму зарплат усіх працівників
const salaries = {
  Іван: 100,
  Маруся: 160,
  Вася: 130,
};
let total = 0;
// //6 Через for...in
// for (const key in salaries) {
//   console.log("key :>> ", key);
//   total += salaries[key];
// }
// console.log("total :>> ", total);

//6 Через Object.keys() та for..of
// const keyArr = Object.keys(salaries);

// for (const key of keyArr) {
//   total += salaries[key];
// }
// console.log("total :>> ", total);

//6 Через Object.values() та for..of

// const valuesArr = Object.values(salaries);

// for (const value of valuesArr) {
//   console.log("value :>> ", value);
//   total += value;
// }
// console.log("total :>> ", total);

//6 Через Object.entries() та for..of

// const entriesArr = Object.entries(salaries);
// console.table("entriesArr :>> ", entriesArr);

let arr1 = [1, 1, 2, 3, 4];
let arr2 = [5, 6, 7, 8, 9];

// const allArr = arr1.concat(arr2);
const allArr = [200, ...arr1, 100, ...arr2, 300];
console.log("allArr :>> ", allArr);

//* ============== Метод hasOwnProperty() ==============

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log("dog.legs=>", dog.legs); // 4

// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false
