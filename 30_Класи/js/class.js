//3   Оголошення класу
//3   Конструктор класу
//3   Об'єкт параметрів
//3   Методи класу
//3   Приватні властивості
//3   Геттери і сеттери
//3   Статичні властивості
//3   Статичні методи
//3   Наслідування класів
//3   Конструктор дочірнього класу
//3   Методи дочірнього класу

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// getWage(baseSalary, overtime, rate);

// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// employee.getWage();

class User {
  #email;

  constructor({ name, email }) {
    // Ініціалізація властивостей екземпляра
    this.name = name;
    this.#email = email;
  }
  // Метод getEmail
  // getEmail() {
  //   return this.#email;
  // }
  // Геттер email
  get email() {
    return this.#email;
  }

  // Метод changeEmail
  // changeEmail(newEmail) {
  //   this.#email = newEmail;
  // }
  // Сеттер email
  set email(newEmail) {
    if (newEmail === "") {
      console.error("Помилка! Пошта не може бути порожнім рядком!");
      return;
      // this.#email = newEmail;
      this.#email = newEmail;
    }
  }
}

const mango = new User({ name: "Манго", email: "mango@mail.com" });
console.log(mango.email); // mango@mail.com
mango.email = "";
// console.log(mango.email); // mango@supermail.com

// const mango = new User({
//   name: "Манго",
//   email: "mango@supermail.com",
// });
// console.log(mango);

// const poly = new User({
//   name: "Поли",
//   email: "poly@mail.com",
// });
// console.log(poly);

// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // mango@supermail.com
// console.log(mango.#email); // Виникне помилка, це приватна властивість
