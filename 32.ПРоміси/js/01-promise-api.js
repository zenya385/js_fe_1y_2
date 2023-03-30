// import "../css/common.css";

// const getData = (onSuccess, onError) => {
//   const isSuccess = Math.random() < 0.5;

//   setTimeout(() => {
//     if (isSuccess) {
//       onSuccess("функція виконалась успішно, з результатом (✅ fulfilled)!");
//     } else {
//       onError("функція виконалась з помилкою (❌ rejected)");
//     }
// }, 1000 )

// }

// const hendleSuccess = (msg) => console.log(`Ми це зробили:>>  ${msg}`);
// const handleError = (msg) => console.log(`Все пропало:>>  ${msg}`);

// getData(hendleSuccess, handleError);

// const promise = new Promise((resolve, reject) => {
//   const isSuccess = Math.random() < 0.5;

//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("функція виконалась успішно, з результатом (✅ fulfilled)!");
//     } else {
//       reject("функція виконалась з помилкою (❌ rejected)");
//     }
//   }, 1000);
// });

// promise
//   .then(
//     (result) => console.log(`✅ ${result}`))
//       //* (error) => console.log(`❌ ${error}`)  )
//       .catch((error) => console.log(`❌ ${error}`) )
//       .finally(() => console.log("finished!")); // "finished"

// //* promise.then(onFulfilled, onRejected);

// function onFulfilled(result) {
//   console.log(`✅ ${result}`);
// }
// function onRejected(error) {
//   console.log(`❌ ${error}`);
// }

// const fetchPokemonById = id => {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json());
// }

// fetchPokemonById(30).then(onFetchSuccess).catch(onFetchError);
// fetchPokemonById(132).then(onFetchSuccess).catch(onFetchError);
// fetchPokemonById(137).then(onFetchSuccess).catch(onFetchError);

// function onFetchSuccess(pokemon) {
//   console.log("onFetchSuccess=>>");
//   console.log(pokemon);
// }
// function onFetchError(error) {
//     console.log("onFetchError=>>");
//     console.log(error);
// }

const horses = [
  "Secretariat",
  "Eclipse",
  "West Australian",
  "Flying Fox",
  "Seabiscuit",
];

let raceCounter = 0;
const refs = {
  startBtn: document.querySelector(".js-start-race"),
  winnerField: document.querySelector(".js-winner"),
  progressField: document.querySelector(".js-progress"),
  tableBody: document.querySelector(".js-results-table > tbody"),
};

refs.startBtn.addEventListener("click", onStart);

function onStart() {
  raceCounter += 1;
  const promises = horses.map(run);

  updateWinnerField("");
  updateProgressField("🤖 Заезд начался, ставки не принимаются!");
  determineWinner(promises);
  waitForAll(promises);
}

function determineWinner(horsesP) {
  Promise.race(horsesP).then(({ horse, time }) => {
    updateWinnerField(`🎉 Победил ${horse}, финишировав за ${time}
    времени`);
    updateResultsTable({ horse, time, raceCounter });
  });
}

function waitForAll(horsesP) {
  Promise.all(horsesP).then(() => {
    updateProgressField("📝 Заезд окончен, принимаются ставки.");
  });
}

function updateWinnerField(message) {
  refs.winnerField.textContent = message;
}

function updateProgressField(message) {
  refs.progressField.textContent = message;
}

function updateResultsTable({ horse, time, raceCounter }) {
  const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
  refs.tableBody.insertAdjacentHTML("beforeend", tr);
}

/*
 * Promise.race([]) для ожидания первого выполнившегося промиса
 */

/*
 * Promise.all([]) для ожидания всех промисов
 */

function run(horse) {
  return new Promise((resolve) => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
