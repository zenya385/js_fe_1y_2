//* Присвоєння за посиланням і за значенням

// * Методи масиву
/* 
Метод split() return []     "" -> []
Методи join() -return ""   [] -> ""
Метод indexOf() return num or -1
Метод includes() return true або false
Методи push() і pop()
Метод slice()
Метод splice()
*/

// ================= split() ===================
// const str = "The quick brown fox jumps over the lazy dog.";
// const words = str.split(" ");
// console.log(words);
// console.log(words[3]);

// const chars = str.split("");
// console.log(chars);
// console.log(chars[8]);

// const strCopy = str.split();
// console.log(strCopy);

// ================= join() =====================
// const elements = ["Fire", "Air", "Water"];

// console.log(elements.join());

// console.log(elements.join(""));

// console.log(elements.join("-"));

// ================= indexOf() =====================
// const beasts = ["ant", "bison", "camel", "duck", "bison"];

// console.log(beasts.indexOf("bison"));

// console.log(beasts.indexOf("bison", 2));
//
// console.log(beasts.indexOf("giraffe"));

// ================= includes() =====================
// const array1 = [1, 2, 3];

// console.log(array1.includes(2));

// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));

// console.log(pets.includes('at'));

// ================= push() =====================
// const animals = ["pigs", "goats", "sheep"];

// const count = animals.push("cows");
// console.log(count);

// console.log(animals);

// animals.push("chickens", "cats", "dogs");
// console.log(animals);

// ================= pop() =====================
// const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

// console.log(plants.pop());

// console.log(plants);

// console.log(plants.pop());

// console.log(plants);

// ================= slice() =====================
// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.slice(2));

// console.log(animals.slice(2, 4));

// console.log(animals.slice(1, 5));

// console.log(animals.slice(-2));

// console.log(animals.slice(2, -1));

// console.log(animals.slice());
// ================= splice() =====================
// const scores = [1, 2, 3, 4, 5];

// // Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
// const deletedScores = scores.splice(0, 3);

// // Тепер масив scores містить два елементи
// console.log(scores); // [4, 5]

// // А масив deletedScores містить три видалені елементи
// console.log(deletedScores); // [1, 2, 3]
//@ ==============================================

// const months = ["Jan", "March", "April", "June"];
// months.splice(1, 0, "Feb");

// console.log(months);

// months.splice(4, 1, "May");

// console.log(months);

/*
todo=========================================
? Створіть масив genres з елементами Jazz і Blues.
? Додайте "Rock&Roll" в кінець.
? Виведіть у консоль перший елемент масиву.
? Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
? Видаліть перший елемент та виведіть його в консоль.
? Вставте «Country» та «Reggy» на початок масиву.
 */

/*
 * Присвоєння за посиланням і за значенням
 */
/*
? Створіть змінну a = 10.
? Створіть та привласніть змінній b -> змінну a
? Виведіть до консолі обидві ці змінні
? Змініть значення змінної a і ще раз виведіть у консоль
*/

/*
? Створіть масив arr1 = [1, 2, 3].
? Створіть та привласніть масиву arr2 -> масив arr1
? Виведіть до консолі обидва цих масива
? Додайте елемент в масив arr1 і ще раз виведете обидва масиви в консоль
*/

/*
 * Перебор масива циклами for та for...of
 */
/*
? Напиши скрипт для перебору масиву fruits циклом for.
? Для кожного елемента масиву виведіть у консоль рядок у форматі номер_елемента: значення_елемента.
? Нумерація елементів має починатися з першого.
*/
// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

/*
? Напиши скрипт пошуку найменшого числа у масиві.
? Код має працювати для будь-якого масиву чисел.
? Використовуйте цикл для вирішення задачі.
*/
// Через цикл for
// const numbers = [2, 17, 94, 1, -20, -1, -100, 23, -40, 37, -50];
// let min = numbers[0];

// Через цикл for...of
// const numbers = [2, 17, 94, 1, -20, -1, -100, 23, -40, 37, -50];
// let min = numbers[0];

/*
? У нас є масив із зарплатами працівників, потрібно порахувати загальну суму зарплат
*/

// const salaries = [200, 450, 600, 150, 300];
// let total = 0;

// ? У нас є кілька масивів із зарплатами працівників із різних відділів, потрібно порахувати загальну суму зарплат
//
// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];
// let total = 0;

/*
 * Базові методи: split та join, indexOf та includes, push, slice та splice, concat
 */

/*
? Напиши скрипт для обчислення площі прямокутника зі сторонами,
? значення яких зберігаються в змінній values у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/
const values = "10 2";

/*
? Напиши скрипт, який виводить в консоль ім'я та телефонний номер користувача.
? У змінних names і phones зберігаються рядки імен та телефонних номерів, розділені комами.
? Порядковий номер імен та телефонів у рядках вказують на відповідність.
? Кількість імен та телефонів гарантовано однакова.
*/

const names = "Sasha, Masha, Dasha, Natasha";
const phones = "3809776626568, 3809725626568, 3809776622598, 3809776622189";

/*
? Напиши скрипт, який «розгортає» рядок (зворотний порядок букв)
? та виводить її в консоль.
*/

/*
? У нас є масив співробітників, Співробітник Shaw звільнився, видаліть його з масиву
*/
