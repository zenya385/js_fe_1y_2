// Стек виклику функцій (http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!)

// Функції відкладеного виклику window.setTimeout(callback, delay, arg1, arg2, ...);

// setTimeout();
// setInterval();

// function start() {
//   console.log("start");
// }
// setTimeout(() => {
//   console.log("middle");
// }, 000);

// function end() {
//   console.log("end");
// }

// start();
// end();

// const start = Date.now();

// console.log("fisrt:>>", Date.now() - start);

// setTimeout(() => {
//   console.log("second:>>", Date.now() - start);
// }, 1000);

//   console.log("third:>>", Date.now() - start);

const inervalId = setInterval(() => {
  console.log("Hello!!!:>>");
}, 0.2);

setTimeout(() => {
  clearInterval(inervalId);
}, 4000);
// console.log(inervalId);
