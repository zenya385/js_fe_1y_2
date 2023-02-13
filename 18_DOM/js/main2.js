//* Завдання 1
// HTML містить список категорій ul#categories.

// <ul id="categories">
// <li class="item">
// <h2>Animals</h2>
// <ul>
// <li>Cat</li>
// <li>Hamster</li>
// <li>Horse</li>
// <li>Parrot</li>
// </ul>
// </li>
// <li class="item">
// <h2>Products</h2>
// <ul>
// <li>Bread</li>
// <li>Prasley</li>
// <li>Cheese</li>
// </ul>
// </li>
// <li class="item">
// <h2>Technologies</h2>
// <ul>
// <li>HTML</li>
// <li>CSS</li>
// <li>JavaScript</li>
// <li>React</li>
// <li>Node.js</li>
// </ul>
// </li>
// </ul>

// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

//* ============================== 1 ===========================================

// // const list = document.querySelector("#categories");
// const allItem = document.querySelectorAll("#categories>.item");
// console.log("Number of categories:", allItem.length);

// for (const item of allItem) {
//   console.log("Category: ", item.childNodes[1].textContent);
//   const itemLengthInside = item.children[1];
//   console.log("Elements:>> ", itemLengthInside.children.length);
// }

//* ============================== 2 ===========================================

// const list = document.querySelector("#categories");
// const allItemOfList = document.querySelectorAll(".item");
// console.log(`Number of categories: ${allItemOfList.length} `);

// allItemOfList.forEach((el) => {
//   const lengthTitle = el.querySelector("h2").textContent;
//   console.log(`Category: ${lengthTitle}`);
//   const array2 = el.querySelectorAll("li");
//   console.log(`Elements ${array2.length}`);
// });

//* ===============================================================================

// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action); // "save"

// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action); // "close"
