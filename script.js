function delayedPromise(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

const promisesAll = [
  delayedPromise("Перший проміс", 1000),
  delayedPromise("Другий проміс", 2000),
  delayedPromise("Третій проміс", 1500),
  delayedPromise("Четвертий проміс", 3000),
  delayedPromise("П'ятий проміс", 2500),
];

Promise.all(promisesAll)
  .then((results) => {
    console.log("Результати всіх промісів:");
    console.log(results);
  })
  .catch((error) => {
    console.log("Помилка:", error);
  });












  
function randomDelay(value) {
  const delay = Math.floor(Math.random() * 4000) + 1000;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

const promisesRace = [
  randomDelay("Перший проміс"),
  randomDelay("Другий проміс"),
  randomDelay("Третій проміс"),
  randomDelay("Четвертий проміс"),
  randomDelay("П'ятий проміс"),
];

Promise.race(promisesRace)
  .then((result) => {
    console.log("Найшвидший проміс:", result);
  })
  .catch((error) => {
    console.log("Помилка:", error);
  });
