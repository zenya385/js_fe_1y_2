// Завдання 1

//  Створіть масив genres з елементами Jazz і Blues? Додайте "Rock&Roll" в кінець.
//  Виведіть у консоль перший елемент масиву.
//  Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
//  Видаліть перший елемент та виведіть його в консоль.
//  Вставте «Country» та «Reggy» на початок масиву.

// const genres = ["Jazz", "Bluez"];
// const add = genres.push("Rock&Roll");
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// const shift = genres.shift(0);
// console.log(shift);
// const addInStart = genres.unshift("Country", "Reggy");
// console.log(genres);

//    Завдання 2 (Присвоєння за посиланням і за значенням)

//  Створіть змінну a = 10.
//  Створіть та привласніть змінній b -> змінну a
//  Виведіть до консолі обидві ці змінні
//  Змініть значення змінної a і ще раз виведіть у консоль

// let a = 10;
// const b = a;
// console.log('a :>> ', a);
// console.log('b :>> ', b);
// a = 15;
// console.log('a :>> ', a);

//    Завдання 3 (Присвоєння за посиланням і за значенням)

//  Створіть масив arr1 = [1, 2, 3].
//  Створіть та привласніть масиву arr2 -> масив arr1
//  Виведіть до консолі обидва цих масива
//  Додайте елемент в масив arr1 і ще раз виведете обидва масиви в консоль

// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// console.log('arr1 :>> ', arr1);
// console.log('arr2 :>> ', arr2);
// arr1.push(4)
// console.log('arr1 :>> ', arr1);

//    Завдання 4 (Перебор масива циклами for та for...of)

//  Напиши скрипт для перебору масиву fruits циклом for.
//  Для кожного елемента масиву виведіть у консоль рядок у форматі номер_елемента: значення_елемента.
//  Нумерація елементів має починатися з першого.

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];
// for (let i = 0; i < fruits.length; i+=1) {
//   console.log(fruits.indexOf(fruits[i]) + 1);
//   console.log(fruits[i]);
//   // console.log(`${i + 1}: ${fruits[i]}`);
// }

//    Завдання 5

//  Напиши скрипт пошуку найменшого числа у масиві.
//  Код має працювати для будь-якого масиву чисел.
//  Використовуйте цикл для вирішення задачі.

//  Через цикл for
// const numbers = [2, 17, 94, 1, -20, -1, -100, 23, -40, 37, -50];
// let min = numbers[0];
// for (let i = 0; i < numbers.length; i+=1) {
//   if (min > numbers[i]) {
//     min = numbers[i];
//   }
// }
// console.log("min :>> ", min);

//  Через цикл for...of
// const numbers = [2, 17, 94, 1, -20, -1, -100, 23, -40, 37, -50];
// let min = 0;
// for (const number of numbers) {
//   if (min > number) {
//     min = number;
//   }
// }
// console.log("min :>> ", min);

//   Завдання 6

// У нас є масив із зарплатами працівників, потрібно порахувати загальну суму зарплат

// const salaries = [200, 450, 600, 150, 300];
// let total = 0;
// for(let i = 0; i < salaries.length; i+=1){
//     total += salaries[i]
// }
// console.log('total :>> ', total);

//   Завдання 7

// У нас є кілька масивів із зарплатами працівників із різних відділів, потрібно порахувати загальну суму зарплат

// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];
// const concat = managerSalaries.concat(developersSalaries);
// let total = 0;
// for(let i = 0;i < concat.length;i+=1){
//     total += concat[i];
//     total = total + concat[i];

// }
// console.log('total :>> ', total);
//  Базові методи: split та join, indexOf та includes, push, slice та splice, concat

//   Завдання 8

// Напиши скрипт для обчислення площі прямокутника зі сторонами,
//  значення яких зберігаються в змінній values у вигляді рядка.
//  Значення гарантовано розділені пробілом.

// const values = "10 10 5 5";
// const numbers = values.split(" ");
// const multiplication = numbers[0] * numbers[2];
// console.log('multiplication :>> ', multiplication);

//   Завдання 9

// Напиши скрипт, який виводить в консоль ім'я та телефонний номер користувача.
//  У змінних names і phones зберігаються рядки імен та телефонних номерів, розділені комами.
//  Порядковий номер імен та телефонів у рядках вказують на відповідність.
//  Кількість імен та телефонів гарантовано однакова.

// const names = "Макс, Карина, Саня, Илья, Соня";
// const phones =
//   "+380999828973,+38099982131,+380999824726,+380999820912,+380999821242";
// const splitNames = names.split(",");
// const splitPhones = phones.split(",");
// for (let i = 0; i < splitNames.length; i+=1) {
//   console.log(splitNames[i] + " - " + splitPhones[i]);
//     // console.log(`Імя: ${names[i]}, телефон: ${phones[i]}`);
// }

//   Завдання 10

// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв)
//  та виводить її в консоль.

const warm = "Hello my name Nazar";
const warmSplit = warm.split("");
let reversWarm = [];
for (let i = warm.length - 1; i >= 0; i -= 1) {
  reversWarm.push(warmSplit[i]);
}
console.log("reversWarm :>> ", reversWarm.join(""));

//   Завдання 11

// У нас є масив співробітників, Співробітник Shaw звільнився, видаліть його з масиву.
// const workPeople = ["Nazar","Yulia","Roma","Shaw","Maks","Sasha"];
// for(let i = 0;i < workPeople.length;i++){
//     if(workPeople[i] === "Shaw"){
//         const deletedPeople = workPeople.splice(workPeople.indexOf(workPeople[i]),1);
//     }
// }
// console.log('workPeople :>> ', workPeople);
