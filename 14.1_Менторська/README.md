<!-- ? Напиши скрипт, який для об'єкта user послідовно:
?  додає властивість mood зі значенням 'happy'
?  замінює значення hobby на 'skydiving'
?  замінює значення premium на false
?  виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() і for...of -->

const user = {
name: 'Mango',
age: 20,
hobby: 'html',
premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

clo

 <!-- *========================================================= -->

 <!-- /*
? Напишіть ф-цію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю.
? Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям.
*/
 const stones = [
   { name: 'Смарагд', price: 1300, quantity: 4 },
   { name: 'Діамант', price: 2700, quantity: 3 },
   { name: 'Сапфір', price: 400, quantity: 7 },
   { name: 'Щебінь', price: 200, quantity: 2 },
 ]; -->

 <!-- *========================================================= -->

<!-- ?
? Напишіть ф-цію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю.
? Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям. -->

// const stones = [
// { name: 'Смарагд', price: 1300, quantity: 4 },
// { name: 'Діамант', price: 2700, quantity: 3 },
// { name: 'Сапфір', price: 400, quantity: 7 },
// { name: 'Щебінь', price: 200, quantity: 2 },
// ];

<!--! ============================================================= -->

<!-- /*
? Напиши скрипт управління особистим кабінетом інтернет-банку.
? Є об'єкт account, в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
?
? Типів транзакцій лише два:
? Можна покласти чи зняти гроші з рахунку.
?
? Кожна транзакція це об'єкт із властивостями: id, type та amount
*/ -->

// const Transaction = {
// DEPOSIT: 'deposit',
// WITHDRAW: 'withdraw',
// };
