// ================================================================= №1 ==========================================================================
// const genres = ["Jazz", "Blues"];
// genres.push("Rock&Roll")

// console.log(genres.slice(0,1));
// console.log(genres.slice(2));
// console.log(genres.shift());
// genres.splice(0, 0, "Country", "Reggy")
// console.log(genres);

// ================================================================= №2 ==========================================================================
// let a = 10;
// const b = a;

// console.log(a, b);
// a = 15;
// console.log(a, b);

// ================================================================= №3 ==========================================================================
// let arr1 = [1, 2, 3];
// const arr2 = arr1;

// console.log(arr1, arr2);

// arr1.push("7");

// console.log(arr1, arr2);

// ================================================================= №4 ==========================================================================
// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let fruit of fruits) {
//   console.log(`${1 + fruits.indexOf(fruit)}: ${fruit}`);
// }

// ================================================================= №5 ==========================================================================
// const numbers = [2, 17, 94, 1, -20, -1, -100, 23, -40, 37, -50];
// let min = numbers[0];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }
// console.log(min);

//? ===============================================================================================================================================
// const numbers = [2, 17, 94, 1, -20, -1, -100, 23, -40, 37, -50];
// let min = numbers[0];

// for (const number of numbers) {
//   // console.log(number < min);
//   min = number;
// }

// console.log(min);

// ================================================================= №6 ==========================================================================
// const salaries = [200, 450, 600, 150, 300];
// let total = 0;

// for (const salari of salaries) {
//   total += salari;
// }

// console.log(total);
// ================================================================= №7 ==========================================================================
// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];
// let total = 0;

// const allSalaries = managerSalaries.concat(developersSalaries);
// // const allSalaries = [...managerSalaries, ...developersSalaries];

// for (const allSalari of allSalaries) {
//   total += allSalari;
// }

// console.log(total);

// ================================================================= №8 ==========================================================================
// const numbers = "9 12";
// const value = numbers.split(" ");
// let total = 1;

// for (let i = 0; i < value.length; i += 1) {
//   total *= value[i];
// }

// console.log(total);

// ================================================================= №9 ==========================================================================
// const names = ["Vitalia", "Dania", "Andrei"];
// const phones = ["380444618061", "380345874390", "380123458609"];

// for (let i = 0; i < names.length; i += 1) {
//   console.log(`${names[i]}: ${phones[i]}`);
// }
// ================================================================= №10 ==========================================================================
// function reverse (someWord) {
//     let arr;
//     arr = someWord.split("");
//     console.log(arr);
//     arr.reverse();
//     console.log(arr);

//     return
// }

// reverse("hello");

// ================================================================= №11 ==========================================================================
// const colleague = ["Anderson", "Vitalia", "Petia", "Vasia", "Shaw", "Kolia", "Frosia", "Nazar"];

// colleague.splice(4, 1)
// console.log(colleague);
