// // 1
// const genres = ["Jazz", "Blues"];
// genres.push("Rock&Roll");
// console.log(genres[0]);
// console.log(genres[2]);
// console.log(genres.slice(0, 1));
// console.log(genres.splice(0, 0, "Country", "Reggy"));
// console.log(genres);
// // 2
// let a = 10;
// let b = a;
// console.log(a);
// console.log(b);
// a = 12;
// console.log(a);
// console.log(b);
// // 3
// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// console.log(arr1);
// console.log(arr2);
// arr1.push(4);
// console.log(arr1);
// console.log(arr2);
// // 4
// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}`, ":", fruits[i])
// }
// // 5
// const numbers = [2, 17, 94, 1, -20, -1, -100, 23, -40, 37, -50];
// let min = numbers[0];
// for (let j = 0; j < numbers.length; j += 1) {
//   if (numbers[j] === Math.min(...numbers)) {
//     min = numbers[j];
//     console.log(min);
//     break;
//   }
// }
// for (const number of numbers) {
//   if (number === Math.min(...numbers)) {
//     min = number;
//     console.log(min);
//     break;
//   }
// }
// // 6
// const salaries = [200, 450, 600, 150, 300];
// let total = 0;
// for (let k = 0; k < salaries.length; k += 1) {
//   total += salaries[k];
// }
// console.log(total);
// // 7
// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];
// const allSalaries = managerSalaries.concat(developersSalaries);
// for (let k = 0; k < salaries.length; k += 1) {
//   total += salaries[k];
// }
// console.log(total);
// // 8
// const values = "20 10 20 10";
// const valueA = values.slice(0, 2);
// const valueB = values.slice(3, 5);
// const rectangleArea = valueA * valueB;
// console.log(rectangleArea);
// // 9
// const names = ["Vitalya", "Sergey", "Vasya"];
// const phones = ["+38 073478 378374", "+38 8789999956", "+38 46456456"];
// for (let i = 0; i < names.length; i += 1) {
//   console.log(`${names[i]} : ${phones[i]}`)
// }
// // 10
// const string = "This is string";
// console.log(string.split("").reverse().join(""))
// // 11
// const employees = ["Vitalya", "Sergey", "Vasya", "Shaw", "Alex"];
// console.log(employees);
// const del = employees.splice(employees.indexOf("Shaw"), 1);
// console.log(employees);
