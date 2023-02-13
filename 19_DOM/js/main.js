// #=================== Властивості та атрибути
// 6  Властивість textContent
// const text = document.querySelector(".text");
// text.textContent = "Привіт цей текст ми змінили";

// const title = document.querySelector(".hero__title");
// title.textContent = "Я Рижик!";

// 6  Властивість classList
//3 У властивості classList зберігається об'єкт з методами
//3   для роботи з класами елемента.

//3 --elem.classList.contains(cls) - повертає true або false,
//3       залежно від наявності класу cls в елемента.
//3 --elem.classList.add(cls) - додає клас cls до списку
//3      класів елемента.
//3 --elem.classList.remove(cls) - видаляє клас cls зі
//3      списку класів елемента.
//3 --elem.classList.toggle(cls) - якщо відсутній клас cls,
//3      то додає його, якщо - присутній, навпаки - видаляє.
//3 --elem.classList.replace(oldClass, newClass) -
//3      замінює існуючий клас oldClass на вказаний newClass.

//4 elem.classList.contains(cls);
// const body = document.querySelector(".body");
// console.log("class body:>> ", body.classList.contains("bowdy"));

//4 elem.classList.add(cls);
// const btn = document.querySelector(".magic-btn");
// btn.classList.add("active");
// body.classList.add("active");

//4 elem.classList.remove(cls)
// btn.classList.remove("active");

//4 elem.classList.toggle(cls)
// btn.classList.toggle("is-hidden");

// btn.classList.toggle("is-hidden");

//4 elem.classList.replace(oldClass, newClass)
// const btn = document.querySelector(".magic-btn");
// btn.classList.replace("magic-btn", "btnMag");
// console.log("classList.replace :>> ", btn.classList);

// 6  Властивість style
// const title = document.querySelector(".hero__title");
// title.style.color = "red";
// title.style.fontSize = "35px";
// console.log(title.style);

// 6  Атрибути
//3 --elem.hasAttribute(name) - перевіряє наявність атрибута,
//3       повертає true або false.
//3 --elem.getAttribute(name) - отримує значення атрибута і
//3       повертає його.
//3 --elem.setAttribute(name, value) - встановлює атрибут.
//3 --elem.removeAttribute(name) - видаляє атрибут.
//3 --elem.attributes - властивість, що повертає об'єкт
//3       усіх атрибутів елемента.

//4 elem.hasAttribute(name);
// const imageAttribut = document.querySelector(".hero__image");
// console.log("hasAttribute:>> ", imageAttribut.hasAttribute("src"));

//4 elem.getAttribute(name)
// console.log("getAttribute:>> ", imageAttribut.getAttribute("alt"));

//4 elem.setAttribute(name, value)
// imageAttribut.setAttribute("height", "200");

//4 elem.removeAttribute(name)
// console.log("removeAttribute:>> ", imageAttribut.removeAttribute("alt"));

//4 elem.attributes
// console.log("attributes:>> ", imageAttribut.attributes);

// 6  data-атрибути

// const addBtn = document.querySelector('button[data-actionsss="add"]');
// console.log(addBtn.dataset.actionsss); // "add"

// const removeBtn = document.querySelector('button[data-action="remove"]');
// console.log(removeBtn.dataset.action); // "remove"

// const editBtn = document.querySelector('button[data-action="edit"]');
// console.log(editBtn.dataset.action); // "edit"

// #=================== Створення та видалення елементів
// 6  Створення
//4 document.createElement(tagName);

// const heading = document.createElement("h1");
// console.log(heading); // <h1></h1>

// heading.textContent = "This is a heading";
// console.log(heading); // <h1>This is a heading</h1>

// const image = document.createElement("img");
// image.src = "https://placeimg.com/640/480/nature";
// image.alt = "Nature";
// image.width = "100";
// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />

// 6  Додавання
//3 --element.append(el1, el2, ...) - додає один
//3       або декілька елементів після всіх дітей елемента element.
//3 --element.prepend(el1, el2, ...) - додає один
//3       або декілька елементів перед усіма дітьми елемента element.
//3  --element.after(el1, el2, ...) - додає один
//3       або декілька елементів після елемента element.
//3 --element.before(el1, el2, ...) - додає один
//3       або декілька елементів перед елементом element.

const list = document.querySelector(".usernames");

// //3  Adds an item to the end of the list
const lastItem = document.createElement("li");
lastItem.textContent = "Poly";
list.append(lastItem);

// //3  Adds an item to the beginning of the list
const firstItem = document.createElement("li");
firstItem.textContent = "Ajax";
list.prepend(firstItem);
// ---
// //3  Adds a title before the list
const title = document.createElement("h2");
title.textContent = "USERNAMES";
list.before(title);

// //3  Adds a paragraph after the list
const text = document.createElement("p");
text.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
list.after(text);

// 6  Видалення
//4 elem.remove();

const titleHero = document.querySelector(".hero__title");
titleHero.remove();
title.remove();
