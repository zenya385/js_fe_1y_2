// ? Напиши скрипт, який для об'єкта user послідовно:
// ?  додає властивість mood зі значенням 'happy'
// ?  замінює значення hobby на 'skydiving'
// ?  замінює значення premium на false
// ?  виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() і for...of -->

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// console.log("user :>> ", user);

// const userKeys = Object.keys(user);
// console.log("userKey :>> ", userKeys);

// for (const key of userKeys) {
//   console.log(`${key}: ${user[key]}`);
// }

// 2================================================================

/*
? Напишіть ф-цію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю.
? Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям.
*/
// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 3 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   let totalPrice;
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       totalPrice = stone.price * stone.quantity;
//       return totalPrice;
//     }
//   }
//   return "Немає такого каменю!!!";
// }

// console.log("Щебінь", calcTotalPrice(stones, "Щебінь"));
// console.log("Сапфір", calcTotalPrice(stones, "Сапфір"));
// console.log("Діамант", calcTotalPrice(stones, "Діамант"));
// console.log("Щебінь", calcTotalPrice(stones, "Смарагд"));

// 2================================================================

const filmoteka = [
  {
    id: 1,
    title: "Duna",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 10,
    actors: [
      "Amelia Gibson",
      "Cameron Clayton",
      "Viola Vasquez",
      "Lula Collins",
      "Victor Nichols",
    ],
    adult: false,
  },
  {
    id: 2,
    title: "Venom",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 8,
    actors: [
      "Inez Greer",
      "Barry Curtis",
      "Blanche Rios",
      "Glen Perry",
      "Logan Powers",
    ],
    adult: true,
  },
  {
    id: 3,
    title: "Luca",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 9,
    actors: [
      "Marguerite Gibbs",
      "Lora Alvarez",
      "Jorge Simpson",
      "Thomas Hall",
      "Darrell Hunter",
    ],
    adult: false,
  },
  {
    id: 4,
    title: "Free Guy",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 6,
    actors: [
      "Calvin Andrews",
      "Mamie Myers",
      "Madge Townsend",
      "Ralph Kim",
      "Jorge Reese",
    ],
    adult: true,
  },
  {
    id: 5,
    title: "Saw",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 7,
    actors: [
      "Adele Marsh",
      "Melvin Burgess",
      "Jesus Reese",
      "Harriet Moreno",
      "Curtis Cox",
    ],
    adult: true,
  },
];

//? Напишіть функцію getAllTitlesOfFilms(films), яка повертає масив із усіма
//? назвами фільмів.
// function getAllTitlesOfFilms(films) {
//   const allTitlesOfFilms = [];

//   for (const film of films) {
//     allTitlesOfFilms.push(film.title);
//   }
//   return allTitlesOfFilms;
// }
// console.log(getAllTitlesOfFilms(filmoteka));

//? Напишіть функцію findFilmByName(films, filmTitle), яка шукає фільм за назвою.
// function findFilmByName(films, filmTitle) {

//   for (const film of films) {
//     if (film.title === filmTitle) {
//       return film.title;
//     }
//   }

//   return `Фільм ${filmTitle} не знайдено`;
// }

// console.log("findFilmByName :>> ", findFilmByName(filmoteka, "venom"));
// console.log("findFilmByName :>> ", findFilmByName(filmoteka, "Saw"));

//? Напишіть функцію getAdultFilms(films), яка повертає масив усіх дорослих фільмів.
// function getAdultFilms(films) {
//   const adultFilm = [];

//   for (const film of films) {
//     if (film.adult) {
//       adultFilm.push(film.title);
//     }
//   }

//   return adultFilm;
// }
// console.log("getAdultFilms(films):>> ", getAdultFilms(filmoteka));

//? Напишіть функцію getNotAdultFilms(films), яка повертає масив усіх фільмів без обмеження.

// function getNotAdultFilms(films) {
//   const allFilms = [];

//   for (const film of films) {
//     if (!film.adult) {
//       allFilms.push(film.title);
//     }
//   }
//   return allFilms;
// }

// console.log("getNotAdultFilms(filmoteka) :>> ", getNotAdultFilms(filmoteka));
