// const horses = [
//   "Secretariat",
//   "Eclipse",
//   "West Australian",
//   "Flying Fox",
//   "Seabiscuit",
// ];

// let raseCounter = 0;
// const refs = {
//   starnBtn: document.querySelector(".js-start-race"),
//   winerField: document.querySelector(".js-winner"),
//   progressField: document.querySelector(".js-progress"),
//   tablebody: document.querySelector(".js-results-table"),
// };

// refs.starnBtn.addEventListener("click", onHandleStart);

// function onHandleStart() {
//   const promises = horses.map(run);
//   console.log("waitForAll:>>", waitForAll(promises));
// }

// function determinateWiner(promiseH) {
//   Promise.race(promiseH).then(({ horse, time }) => {
//   });
// }

// function waitForAll(promiseH) {
//   Promise.race(promiseH).then(({ horse, time }) => {});
// }



// function run(horses) {
//   const promise = new Promise((res) => {
//     const time = getRandomTime(2000, 3500);

//     setTimeout(() => {
//       res({ horse, time });
//     }, time);
//   });
// }

// function getRandomTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }



// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
//     // Response handling
//   })
//   .then(data => {
//     // Data handling
//   })
//   .catch(error => {
//     // Error handling
//   });


  const data = fetch('https://api.sampleapis.com/avatar/info')
    .then((response) => response.json())
    .then((json) => console.log(json));
    
// console.log("data:>>", data);