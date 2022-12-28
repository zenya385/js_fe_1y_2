/*
 * Математичні оператори (+, -, *, /, %, **)
 */

/*
 ? Дано два числа 20 та 10.
 ? Проведіть над цими числами математичні операції (+ - / * %).
*/
// const numA = -20;
// const numB = 7;

// const result = numA % numB;

// console.log(result);

//? Перевірте чи парні числа 15, 20, 45, 30.
// const numA = 15;

// console.log(numA % 2);

// const numB = 20;

// console.log(numB % 2);

// const numC = 45;

// console.log(numC % 2);

// const numD = 30;

// console.log(numD % 2);

/*
 * Number, Number.parseInt(), Number.parseFloat()
 */

//? Даний рядок '24px', дістаньте з цього рядка ціле число.
// const str = '24px';
// const num = Number.parseInt(str);

// console.log(num);

//? Даний рядок '25.5%', дістаньте з цього рядка дробове число.
// const str = '25.5%';
// const num = Number.parseFloat(str);

// console.log(num);

//? Спробуйте призвести до числа, строку 'abc'.
// const str = 'abc';
// const num = Number.parseInt(str);

// console.log(num);

//? Запросіть у користувача ввести два числа, складіть їх та виведіть результат у консоль.
// const numA = Number.parseFloat(prompt('Введіть перше число'));
// const numB = Number.parseFloat(prompt('Введіть друге число'));

// const result = numA + numB;

// console.log(result);

// console.log(Number.parseInt("5px")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("qweqwe")); // NaN

// console.log(Number.parseFloat("5px")); // 5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("qweqwe")); // NaN

// console.log(Number.MAX_VALUE); // NaN
// const val = "23";
// console.log(Number.isNaN(val));
// console.log(typeof val);
// console.log("val :>> ", val.length);

// console.log(0.1 + 0.2 === 0.3); // false
// console.log((0.1 * 100 + 0.2 * 100) / 100 === 0.3); // true
// console.log(0.1 + 0.2); // 0.30000000000000004

// console.log((0.6 + 0.2).toFixed(1));

// Math.floor(num) - повертає найменше ціле число,
// менше, або яке дорівнює зазначеному числу
// console.log(Math.floor(1.9)); // 1
// console.log(-2 < -1); // 1

// Math.ceil(num) - повертає найбільше ціле число,
// більше, або яке дорівнює зазначеному числу.
// console.log(Math.ceil(1.1)); // 2

// Math.round(num) - повертає значення числа,
// округленого до найближчого цілого
// console.log(Math.round(1.4)); // 1
// console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
// console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - повертає найменше ціле число з набору
// console.log(Math.min(20, -10, 50, 40, 9.8)); // -10

// // Math.pow(base, exponent) - піднесення до степеня
// console.log(Math.pow(4, 2)); // 16
// console.log(2 ** 3); // 16

// // Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
// console.log(Math.random()); // випадкове число між 0 і 1
// console.log(Math.random() * (3 - 1) + 1); // псевдовипадкове число від 1 до 10

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
// }

const min = 10.2;
const max = 20;
console.log(Math.round(Math.floor(Math.random() * (max - min + 1)) + min));
