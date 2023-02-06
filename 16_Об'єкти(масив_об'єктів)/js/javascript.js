// Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
// Код;
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// const obb = Object.keys(user);
// for (const key of obb) {
//   console.log(key);
// }

// Example 2 - метод Object.values()
// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum.
// Повинно вийти 390.Якщо об'єкт salaries порожній, то результат має бути 0.

// Код;
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// const numbers = Object.values(salaries);
// let sum = 0;
// for (const number of numbers) {
//   sum += number;
// }
// console.log("sum :>> ", sum);

// Example 3 - Масив об'єктів
// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю.
// Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта

// Код;

const stones = [
  { name: "Смарагд", price: 1300, quantity: 4 },
  { name: "Діамант", price: 2700, quantity: 3 },
  { name: "Сапфір", price: 400, quantity: 7 },
  { name: "Щебінь", price: 200, quantity: 2 },
];
let totalPrice = 0;

function calcTotalPrice(stones, stoneName) {
  // const odd = [one, two, three, four];
  for (let i = 0; i < stoneName.length; i += 1) {
    if (stoneName) {
      const { name, price, quantity } = stones;
      totalPrice = price * quantity;
  
        console.log(`Sorry bro we dont have ${stones},${stones[i]}`);
      }
    }
  }
  console.log("totalPrice :>> ", totalPrice);
}
calcTotalPrice(stones, "Діамант");
calcTotalPrice(stones, "safsa");
