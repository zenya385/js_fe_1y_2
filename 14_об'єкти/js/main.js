// 1
// 2
// #
// 3
// 4
// 5
// 6
// @
// !
// *
// $
// todo
// ?

//2 ======================== #Об'єкти =====================
//3 Об'єкти дозволяють описати і згрупувати характеристики певної сутності - користувача, книги, продукту в магазині,
//3  чого завгодно.Об'єкти ще називають словниками, тобто вони містять терміни (властивості) та їх визначення (значення).

//3 об’єкти використовуються для зберігання ключів різних колекцій даних та складніших об’єктів.

//$ 1.Створення об'єкта
//$ 2.Вкладені властивості
//$ 3.Звернення до властивостей: через крапку
//$ 4.Звернення до вкладених властивостей
//$ 5.Звернення до властивостей через квадратні дужки
//$ 6.Зміна значення властивості
//$ 7.Додавання властивостей
//$ 8.Короткі властивості»
//$ 9.Обчислювальні властивості
//$ 10.Методи об'єкта
//$ 11.Доступ до властивостей об'єкта в методах

//4 ============================ 1.Створення об'єкта ==========================
//3 Для оголошення використовуються фігурні дужки {} - літерал об'єкта
//3 Синтаксис створення об'єкта
// const user = new Object(); // синтаксис "конструктора об’єктів"
// const user = {}; // синтаксис "літералу об’єкта"
// console.log("user:", user);

//3     Ми можемо одразу помістити деякі властивості у {...} як пари “ключ: значення”:
// const user = {
//   name: "Jon",
//   age: 30,
// };

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log("user :>> ", user);

// console.log("book :>> ", book);

//4 ============================ 2.Вкладені властивості ============================
//3 Значенням властивості може бути інший об'єкт, для того, щоб зберігати вкладені і згруповані дані.
// const user = {
//   "first name": "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// console.log("user :>> ", user);

//4 ============================ 3.Звернення до властивостей: через крапку ============================
//3 Перший спосіб отримати доступ до властивості об'єкта - це синтаксис   об'єкт.ім'я_властивості.
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// console.log("books.title :>> ", book.title);
// console.log("books.author :>> ", book.author);
// console.log("books.genres :>> ", book.genres);
// console.log("books.isPublic :>> ", book.isPublic);
// console.log("books.rating :>> ", book.rating);
// console.log("books.qwerty :>> ", book.qwerty);

//4 ============================ 4.Звернення до вкладених властивостей ============================
//3 Для доступу до вкладених властивостей використовується ланцюжок звернень «через крапку»
// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi", "run"],
// };

// console.log("object :>> ", user.location.city);

// console.log("object :>> ", user.hobbies.length);

// console.log("object :>> ", user.hobbies[user.hobbieslength - 1]);

//3 Якщо значення властивості - це масив, тоді у нашому прикладі user.hobbies - звернення до цього масиву.
//3 Mожна отримати доступ до його елементів через квадратні дужки та індекс, або використовувати властивості і методи.
// const hobbies = user.hobbies;
// console.log(hobbies);

// const firstHobby = user.hobbies[0];
// console.log(firstHobby);

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies);

//4 ============================ 5.Звернення до властивостей через квадратні дужки ====================
//3 Другий спосіб отримати доступ до властивості об'єкта - це синтаксис об'єкт["ім'я властивості"]
//3 Схоже на звернення до елемента масиву з різницею у тому, що в дужках вказується не індекс елемента, а ім'я властивості у вигляді рядка.
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log("object :>> ", book["title"]);

// const bookTitle = book["title"];
// console.log(bookTitle);

// const bookGenres = book["genres"];
// console.log(bookGenres);

// const propKey = "genres";
// const bookAuthor = book[propKey];
// console.log(bookAuthor);

//4 ============================ 6.Зміна значення властивості ============================
//3 Після створення об'єкта, значення його властивостей можна змінити.
//3 Для цього необхідно звернутися до них за ім'ям, наприклад, «через крапку», і присвоїти нове значення.
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// book.title = "ніхто";

// book.genres.push("драма", "драма");

// console.log("book :>> ", book);

// book.rating = 9;
// book.isPublic = false;

// console.log(book.rating);
// console.log(book.isPublic);
// console.log(book.genres);

//4 ============================ 7.Додавання властивостей ============================
//3 Операція додавання нової властивості нічим не відрізняється від зміни значення вже існуючої властивості.
//3 Якщо під час запису значення за ім'ям, така властивість в об'єкті відсутня, вона буде створена.
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = { key1: 836, key2: 369, key3: 159 };
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book.pageCount);
// console.log(book.originalLanguage);
// console.log(book.translations);

//4 ============================ 8.Короткі властивості ============================
//3  Іноді, під час створення об'єкта значення властивості необхідно взяти
//3  зі змінної або параметра функції з таким самим ім'ям, що і у властивості.
//3  Синтаксис у наступному прикладі занадто громіздкий, тому що доводиться
//3  дублювати ім'я властивості та ім'я змінної, в якій зберігається потрібне значення.
//3 shorthand properties

// const name = "Генрі Сибола";
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name);
// console.log(user.age);
//? =========================

// const username = 'Mango';
// const email = 'mango@mail.com';

// const signupData = {
//   username,
//   email,
// };

// console.log(signupData);

//3 Тобто, оголошуючи об'єкт, достатньо вказати тільки ім'я властивості, а значення буде взяте зі змінної з аналогічним ім'ям.

//4 ============================ 9.Обчислювальні властивості =======================
//3 Бувають ситуації, коли під час оголошення об'єкта необхідно додати властивість з ім'ям, яке ми заздалегідь не знаємо,
//3 тому що воно зберігається у якості значення змінної або у якості результату виконання функції.
//  <input name="color" value="tomato" >

// const inputName = "color";
// const inputValue = "tomato";

// const colorPickerData = {
//   [inputName]: inputValue,
// };

// console.log(colorPickerData);

//4 ============================ 10.Методи об'єкта =================================
//3 Досі ми розглядали об'єкти тільки як сховища взаємопов'язаних даних, наприклад, інформація про книгу тощо.
//3 Об'єкти-сховища, зазвичай, знаходяться в масиві таких самих об'єктів, який є колекцією однотипних елементів.

//3 Об'єкти можуть зберігати не тільки дані, але і функції для роботи з цими даними - методи.
//3 Якщо значення властивості - це функція, така властивість називається методом об'єкта.

// const user = {
//   name: "Іван",
//   age: 30,
//   sayHi() {
//     console.log("Привіт!");
//   },
// };

// user.sayHi();

// console.log("object :>> ", user);

// // ✅ Логічно і синтаксично згруповані сутності
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Це метод об'єкта
//   getBooks() {
// for (const book of bookShelf.books) {
//   // console.log("book :>> ", book);
// }
//     // console.log(`Цей метод буде повертати всі книги - властивість books`);
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     bookShelf.books.push(bookName);
//     console.log(
//       `Цей метод буде додавати нову книгу ${bookName} у властивість books`
//     );
//   },
// };

// // Виклики методів
// bookShelf.getBooks();
// bookShelf.addBook("Мауглі");
// console.log("bookShelf :>> ", bookShelf);
