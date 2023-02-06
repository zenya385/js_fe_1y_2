// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     rating: 8.38,
// //   },
// //   {
// //     title: "На березі спокійних вод",
// //     author: "Роберт Шеклі",
// //     rating: 8.51,
// //   },
// //   {
// //     title: "Сон смішної людини",
// //     author: "Федір Достоєвський",
// //     rating: 7.75,
// //   },
// // ];

// // let elementRating;
// // for (const book of books) {
// //   const { title, author, rating: bookRating = 55.5 } = book;

// // console.log("book :>> ", book);
// // console.log("author :>> ", bookRating);
// // console.log("author :>> ", rating);
// // console.log("title :>> ", title);
// // elementRating = bookRating;
// // }
// // console.log("elementRating :>> ", elementRating);

// // const [obj1, obj2, obj3] = books;

// // console.log(obj1, obj2);

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: false },
//   { name: "Ajax", online: true },
//   { name: "Vasyl'", online: false },
// ];

// //2 Шукаємо товариша по імені

// // function findFriendByName(allFriends, friendName) {
// //   for (const friend of friends) {
// //     const { name, online } = friend;

// //     if (name === friendName) {
// //       return "так знайшли";
// //     }
// //   }
// //   return "НЕ МАЄ такого товариша";
// // }
// // console.log(
// //   'findFriendByName(friends, "Ajax"); :>> ',
// //   findFriendByName(friends, "Poly")
// // );

// //2 Dbdtcnb всі імена товаришів
// const names = [];
// function allNameFriends(allFriends) {
//   for (const friend of friends) {
//     const { name, online } = friend;
//     names.push(name);
//   }
//   return names;
// }

// // console.log("allNameFriends(friends); :>> ", allNameFriends(friends));

// //2 сторити 2 масиви 1 - ті що онлайн, 2 - ті що офлайн;

// const getFriendsByStatus = function (allFriends) {
//   const obj = {
//     isOnline: [],
//     offline: [],
//   };

//   for (const friend of allFriends) {
//     if (friend.online) {
//       obj.isOnline.push(friend.name);
//       continue;
//     }
//     obj.offline.push(friend.name);
//   }
//   // return `${isOnline} ${offline}`;
//   return obj;
// };

// console.log("getFriendsByStatus(friends) :>> ", getFriendsByStatus(friends));
