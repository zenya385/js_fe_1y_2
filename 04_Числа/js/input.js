const a = 9;
const b = 4;
const c = "4";
const num = 5 + 5 + "5";
const firstName = "Roman";
const lastName = "Zeno";
const message = `Привіт моє ім'я ${firstName} ${lastName} і я виклачач`;

console.log("result1 :>> ", a + b);
console.log("result2 :>> ", a - b);
console.log("result3 :>> ", a * b);
console.log("result4 :>> ", a / b);
console.log("result5 :>> ", a % b);
console.log("result6 :>> ", a >= b);
console.log("result7 :>> ", b == c);
console.log("result8 :>> ", b === c);
console.log("result9 :>> ", b !== b);
console.log("result10 :>> ", !false);
console.log("result11 :>> ", num);

console.log("result7 :>> ", message);

const number = Number.isNaN(a);
console.log("number :>> ", number);
