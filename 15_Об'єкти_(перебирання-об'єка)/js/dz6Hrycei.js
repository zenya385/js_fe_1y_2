/*  
?   Напиши скрипт, який для об'єкта user, послідовно:

?   додає поле mood зі значенням 'happy'
?   замінює значення hobby на 'skydiving'
?   замінює значення premium на false
?   виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
*/

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keysArr = Object.keys(user);
// for (const key of keysArr) {
//     console.log(`${key}: ${user[key]}`);
// }

/*
?   У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумовування
?   всіх зарплат і збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт
?   salaries порожній, то результат має бути 0.
*/

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// const keysArr = Object.values(salaries);
// let sum = 0;
// for (const key of keysArr) {
//     sum += key
// }
// console.log(sum);

/*
?   Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів
?   та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння
?   з таким ім'ям, ціною та кількістю з об'єкта
*/

// const stones = [
//   {
//     name: "Смарагд",
//     price: 1300,
//     quantity: 4,
//   },
//   {
//     name: "Діамант",
//     price: 2700,
//     quantity: 3,
//   },
//   {
//     name: "Сапфір",
//     price: 400,
//     quantity: 7,
//   },
//   {
//     name: "Щебінь",
//     price: 200,
//     quantity: 2,
//   },
// ];

// const calcTotalPrice = (stones, stoneName) => {
//   let sum = 0;
//   for (const stone of stones) {
//     const { name, price, quantity } = stone;
//     if (stoneName === name) {
//       sum = price * quantity;
//       return sum;
//     }
//   }
//   return `${stoneName} not found`;
// };

// console.log(calcTotalPrice(stones, "Смарагд"));
