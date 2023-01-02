// const username = "Mango";
//? ======================== toLowerCase(), toUpperCase() ===============
// const message = "Welcome to Bahamas!";
// console.log("toLowerCase :>>", message.toLowerCase()); // "welcome to bahamas!"
// console.log("toUpperCase :>>", message.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log("string :>>", message); // "Welcome to Bahamas!"
// console.log("length :>>", message.length); // 19
// console.log("username :>> ", username);
//? ================= indexOf() ================
// console.log("indexof :>> ", message.indexOf("B"));
// console.log("indexof :>> ", message.indexOf("ome"));
// console.log("indexof :>> ", message.indexOf("a"));
// console.log("indexof :>> ", "O" === "o");

//? ================= includes() ================

// const productName = "Ремонтний дроїд 5";

// console.log(".includes('н') :>> ", productName.includes("н")); // true
// console.log(".includes('Н') :>> ", productName.includes("Н")); // false
// console.log(".includes('дроїд') :>> ", productName.includes("дроїд")); // true
// console.log(".includes('Дроїд') :>> ", productName.includes("Дроїд")); // false
// console.log(".includes('Ремонтний') :>> ", productName.includes("Ремонтний")); // true
// console.log(".includes('ремонтний') :>> ", productName.includes("ремонтний")); // false
// console.log(".includes('5') :>> ", productName.includes("5")); // true

//? ================= endsWith() ================

// const jsFileName = "script.js";
// console.log(jsFileName.endsWith(".js")); // true

// const cssFileName = "styles.css";
// console.log(cssFileName.endsWith(".js")); // false

//? ================= replace() і replaceAll() ================

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

//? ================= slice (startIndex, endIndex) ================
// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"
