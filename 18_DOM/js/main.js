//2 ECMAScript — стандарт мови програмування, затверджений міжнародною організацією ECMA

//* Об'єкти window і document
// console.log(window);

// console.log(document.body.div);

//* Дідівські методи пошуку елементів (getElementBy...)
// const titleEl = document.getElementById("title");

// console.dir(titleEl);

// const listItemsEl = document.getElementsByClassName('list__item');

// console.log(listItemsEl);

//* Сучасні методи пошуку елементів (querySelector, querySelectorAll)
// const titleEl = document.querySelector("");
// const titleAllEl = document.querySelectorAll("");
// * звернення по класу
// const titleEl = document.querySelector(".main-title");
// console.log("titleEl :>> ", titleEl);
// * звернення по тегу
// const titleEl = document.querySelector("h1");
// console.log("titleEl :>> ", titleEl);
// * звернення по id
// const titleEl = document.querySelector("#title");
// console.log("titleEl :>> ", titleEl);
// * звернення по атрибуту
// const titleEl = document.querySelector("[id]");
// console.log("titleEl :>> ", titleEl);
// const titleEl = document.querySelector('.js-main-title');

// console.log(titleEl);

// const listItemsEl = document.querySelectorAll(".list__item");
// console.log(listItemsEl[3]);

//* Навігації по DOM дереву

//3  -elem.parentNode - вибере батьківський elem.
//3  -elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
//3  -elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.
//3  -elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
//3  -elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem.
//3  -elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
//3  -elem.lastElementChild - вибере останній дочірній вузол-елемент всередині elem.
//3  -elem.previousSibling - вибере елемент «зліва» від elem (його попереднього сусіда).
//3  -elem.previousElementSibling - вибере вузол-елемент «зліва» від elem (його попереднього сусіда).
//3  -elem.nextSibling - вибере елемент «праворуч» від elem (його наступного сусіда)
//3  -elem.nextElementSibling - вибере вузол-елемент «праворуч» від elem (його наступного сусіда).

// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);
//* ===============================================================
const listEl = document.querySelector(".list");
// console.log("listEl :>> ", listEl);
// console.log(listEl.parentNode);
// console.log(listEl.childNodes);
// console.log(listEl.children[3]);
// console.log(listEl.firstChild);
// console.log(listEl.firstElementChild);
// console.log(listEl.lastChild);
// console.log(listEl.lastElementChild);
// console.log(listEl.previousSibling);
// console.log(listEl.previousElementSibling);
// console.log(listEl.nextSibling);
// console.log(listEl.nextElementSibling);

// * Example =====================
// *https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXXk7QSPd5ii94VduxnLEYlu_2cCZS-od_sw&usqp=CAU

// const btnMagic = document.querySelector("[type]");
// btnMagic.addEventListener("click", () => {
//   const imgEl = document.querySelector("img");
//   imgEl.src =
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXXk7QSPd5ii94VduxnLEYlu_2cCZS-od_sw&usqp=CAU";
// });

// const btnMagic = document.querySelector(".magicBtn");
// console.log("btnMagic :>> ", btnMagic);

// btnMagic.addEventListener("click", () => {
//   const imageEl = document.querySelector("img");
//   imageEl.src =
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXXk7QSPd5ii94VduxnLEYlu_2cCZS-od_sw&usqp=CAU";
// });

// window.console.log("window :>> ", window);
// window.console.log("document :>> ", document);

// const body = document.body;
// console.log("body :>> ", body);
// console.log("body :>> ", body.childNodes[3]);

// ============================================

// https://codepen.io/goit-academy/pen/wvJmGbG

//* ++++++++++++++++++++++ Example ++++++++++++++++++++++++++++++++++

const listWithId = document.querySelector("#menu");
listWithId.style.textTransform = "uppercase";
listWithId.style.fontSize = "24px";
console.log("після ", listWithId);

const listWithClass = document.querySelector(".menu");
console.log(listWithClass);

const menuItemsByTagName = document.querySelectorAll("li");
console.log(menuItemsByTagName[3]);

const menuItemsByClass = document.querySelectorAll(".menu-item");
console.log(menuItemsByClass);

const firstMenuItem = document.querySelector(".menu-item");
firstMenuItem.style.color = "tomato";
console.log(firstMenuItem);
