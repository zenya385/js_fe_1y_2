/*
 * Вспливання подій
 * event.target - цільовий (початковий) елемент
 * event.currentTarget - поточний елемент, на слухачі якого зловили
 */

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const innerChild = document.querySelector("#inner-child");

parent.addEventListener("click", onParentClick);
// child.addEventListener("click", onChildClick);
// innerChild.addEventListener("click", onInnerChildClick);

function onParentClick(e) {
  console.log("Parent target:>>", e.target);
  console.log("Parent currentTarget:>>", e.currentTarget);
}

function onChildClick(e) {
  // console.log("Child target:>>", e.target);
  // console.log("Child currentTarget:>>", e.currentTarget);
}

function onInnerChildClick(e) {
  // console.log("InnerChild target:>>", e.target);
  // console.log("InnerChild currentTarget:>>", e.currentTarget);
}
