async function name(params) {}

const fn = async function () {};

const arr = async () => {};

const x = {
  async getuser() {},
};

class X {
  async getName() {}
}

// const fetchUsers = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();
//   return users;
// };

// fetchUsers().then((users) => console.log(users));

// try {
//   console.log("Всередині try до myVar");
//   myVar;
//   console.log("Всередині try після myVar");
// } catch (error) {
//   console.log("Помилка!");
// }

// console.log("Після try...catch!");

function getFruit(name) {
  const fruits = {
    strawberry: "🍓",
    kiwi: "🥝 ",
    apple: "🍎",
  };

  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(fruits[name]), 500)
  );
}

async function aMakeSmoothie() {
  try {
    console.time("aMakeSmoothie");
    const apple = getFruit("apple");
    const kiwi = getFruit("kiwi");
    const berry = getFruit("strawberry");

    const fruits = await Promise.all([apple, kiwi, berry]);
    console.log(fruits);
    console.timeEnd("aMakeSmoothie");

    return fruits;
  } catch (error) {
    console.log("Ошибка");
  }
}

aMakeSmoothie();
