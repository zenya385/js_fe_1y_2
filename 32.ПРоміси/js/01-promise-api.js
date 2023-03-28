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

const promise = new Promise((resolve, reject) => {
  const isSuccess = Math.random() < 0.5;

  setTimeout(() => {
    if (isSuccess) {
      resolve("функція виконалась успішно, з результатом (✅ fulfilled)!");
    } else {
      reject("функція виконалась з помилкою (❌ rejected)");
    }
  }, 1000);
});

promise
  .then(
    (result) => console.log(`✅ ${result}`))
      // (error) => console.log(`❌ ${error}`)  )
      .catch((error) => console.log(`❌ ${error}`) )
      .finally(() => console.log("finished!")); // "finished"

// promise.then(onFulfilled, onRejected);

function onFulfilled(result) {
  console.log(`✅ ${result}`);
}
function onRejected(error) {
  console.log(`❌ ${error}`);
}
