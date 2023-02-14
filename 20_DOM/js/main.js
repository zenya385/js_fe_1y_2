// const list = document.querySelector("#categories");
// console.log("list.innerHTML :>> ", list.innerHTML);

// const item = document.querySelector(".item");
// console.log("item.innerHTML :>> ", item.innerHTML);

// const ul = document.querySelector(".item ul");
// console.log("item.innerHTML :>> ", ul.innerHTML);
//3 ================== Зміна ======================

// const ulIn = document.querySelector(".item ul");
// ulIn.innerHTML +=
//   "<li class='item'>Dog</li><li class='item'>Wolf</li><li>Fox</li><li>Bear</li>";

// const allUl = document.querySelector("#categories>li>ul");
// allUl.innerHTML = "<li>Dog</li><li>Wolf</li><li>Fox</li><li>Bear</li>";
// ulIn.innerHTML += "<li>Duck</li><li>Bird</li>";
// ulIn.innerHTML = "";

// console.log("ulIn :>> ", ulIn.innerHTML);
// =========================================================
// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Heribs",
//   "Condments",
// ];

// const listIngred = document.querySelector("#ingredients");

// const allElem = ingredients.map(
//   (ingr) => (listIngred.innerHTML += `<li class='item'>${ingr}</li>`)
// );
// // .join("");

// console.log("listIngred :>> ", listIngred);

//2 ================ Метод insertAdjacentHTML() ==================

//3 Додавання рядка з HTML-тегами перед, після або всередину елемента.

//4       elem.insertAdjacentHTML(position, string);

//5 "beforebegin" - перед elem
//5 "afterbegin" - всередині elem, перед усіма дітьми
//5 "beforeend" - всередині elem, після усіх дітей
//5 "afterend" - після elem

// const lastItem = document.querySelector(".item:nth-child(3)");
const lastItem = document.querySelector("#categories");
const lastItemTech = lastItem.lastElementChild;
const lastEl = lastItemTech.lastElementChild;
// console.log("lastItem.lastElementChild :>> ", lastItem.lastElementChild);
// console.log("lastItem :>> ", lastItemTech.lastElementChild);

lastEl.insertAdjacentHTML("afterend", "<li>Dog</li><li>Wolf</li><li>Fox</li>");

// console.log("lastItemTech :>> ", lastItemTech);
// console.log("lastItem :>> ", lastItem);
// lastItem.insertAdjacentHTML(
//   "beforebegin",
//   "<li>Dog</li><li>Wolf</li><li>Fox</li>"
// );
