// const http = require("http");

// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World from Node.js");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// console.log('Hello Node.js')


const validator = require("validator");

const validateEmail = (email) => {
  return validator.isEmail(email);
};

console.log(
  "Is mango@mail.com a valid email?: ",
  validateEmail("mango@mail.com")
);

console.log(
  "Is Mangozedog.com a valid email?: ",
  validateEmail("Mangozedog.com")
);